import md5 from 'md5';
import FetchError from './FetchError.js';

export default class MarvelService {
    static instance = null;
    static keys = {
        publicKey: 'bab7b5e55def28b8bed5f962d700d0d4',
        privateKey: '15b031c215eaa2a264d1f6f164e34589ab7ca829',
    };
    static charactersUrl = 'https://gateway.marvel.com/v1/public/characters';

    constructor() {
        if (MarvelService.instance) {
            return MarvelService.instance;
        }
        MarvelService.instance = this;
    }

    _getResource = async (url) => {
        let response = await fetch(url);

        if (!response.ok) {
            throw new FetchError(`Could not fetch resource ${url}`, response.status);
        }
        return await response.json();
    };

    _getHash = (privateKey, publicKey, ts) => {
        return md5(ts + privateKey + publicKey);
    };

    _characterTransform = (char) => {
        const {id, name, description, thumbnail, urls} = char.data.results[0];
        return {
            id: id,
            name: name,
            description: cutString(description),
            thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
            urls: [urls[0], urls[1]],
        };

        function cutString(str) {
            if (str.length > 230) {
                return str;
            } else {
                return str.slice(0, 230) + '...';
            }
        }
    };

    getCharacter = async (id) => {
        const {publicKey, privateKey} = MarvelService.keys;
        const ts = Date.now();
        const hash = this._getHash(privateKey, publicKey, ts);
        const url = `${MarvelService.charactersUrl}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        return await this._getResource(url).then(this._characterTransform);

    };

    getRandomCharacter = async (attempt = 5) => {
        if (attempt <= 0) {
            throw new FetchError('Server could not responding', 500);
        }
        const min = 1009742,
            max = 1011334;
        const id = Math.floor(Math.random() * (max - min + 1)) + min;
        try {
            return await this.getCharacter(id);
        } catch (error) {
            if (error.statusCode === 404) {
                console.warn(`Character ${id} not found. Retrying...`);
                return await this.getRandomCharacter(attempt - 1);
            } else if (error.statusCode === 429) {
                throw new FetchError('Server could not responding', 500);
            } else {
                throw error;
            }
        }
    };
}


