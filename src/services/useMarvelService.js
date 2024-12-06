import useHttp from './useHttp.jsx';
import md5 from 'md5';
import FetchError from './FetchError.js';
import {cutString} from '../utils/utils.js';

export default function useMarvelService() {
    const {loading, error, onError, fetchData} = useHttp();

    const keys = {
        publicKey: 'bab7b5e55def28b8bed5f962d700d0d4',
        privateKey: '15b031c215eaa2a264d1f6f164e34589ab7ca829',
    };
    const charactersUrl = 'https://gateway.marvel.com/v1/public/characters',
        comicsUrl = 'https://gateway.marvel.com/v1/public/comics';

    const _getHash = (privateKey, publicKey, ts) => {
        return md5(ts + privateKey + publicKey);
    };

    const _characterTransform = ({id, name, description, thumbnail, urls}) => {
        return {
            id: id,
            name: name,
            description: cutString(description),
            thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
            urls: [urls[0], urls[1]],
        };
    };

    const _comicTransform = ({id, title, images, prices}) => {
        return {
            id: id,
            title: title,
            image: images.length > 0 ? `${images[0].path}.${images[0].extension}` : '',
            price: prices.length > 0 ? `$${prices[0].price}` : '',
        };
    };

    const _getApiCredentials = () => {
        const {publicKey, privateKey} = keys;
        const ts = Date.now().toString();
        const hash = _getHash(privateKey, publicKey, ts);
        return {
            publicKey, privateKey, ts, hash
        };
    };

    const _handleError = (error) => {
        if (error.statusCode === 429) {
            const errMess = 'Server could not respond.';
            onError(errMess);
            throw new FetchError(errMess, 500);
        } else {
            onError(error.statusText || error.message);
            throw error;
        }
    };

    const getCharacter = async (id) => {
        const credentials = _getApiCredentials();
        const url = `${charactersUrl}/${id}?ts=${credentials.ts}&apikey=${credentials.publicKey}&hash=${credentials.hash}`;
        const item = await fetchData(url);
        return _characterTransform(item.data.results[0]);
    };

    const getCharacterDetails = async (id) => {
        const credentials = _getApiCredentials();
        const url = `${charactersUrl}/${id}?ts=${credentials.ts}&apikey=${credentials.publicKey}&hash=${credentials.hash}`;
        const item = await fetchData(url);
        const res = _characterTransform(item.data.results[0]);
        res.comics = item.data.results[0].comics.items.slice(0, 10);
        res.comics = res.comics.map(item => {
            const id = item.resourceURI.split('/').pop();
            return {...item, id};
        });
        return res;
    };

    const getRandomCharacter = async (attempt = 5) => {
        if (attempt <= 0) {
            const errMess = 'Server could not responding';
            onError(errMess);
            throw new FetchError(errMess, 500);
        }
        const min = 1009742,
            max = 1011334;
        const id = Math.floor(Math.random() * (max - min + 1)) + min;
        try {
            return await getCharacter(id);
        } catch (error) {
            if (error.statusCode === 404) {
                console.warn(`Character ${id} not found. Retrying...`);
                return await getRandomCharacter(attempt - 1);
            } else{
                _handleError(error);
            }
        }
    };

    const getCharacters = async (offset = 210) => {
        const credentials = _getApiCredentials();
        const url = `${charactersUrl}?limit=9&offset=${offset}&ts=${credentials.ts}&apikey=${credentials.publicKey}&hash=${credentials.hash}`;
        try {
            const item = await fetchData(url);
            return item.data.results.map((result) => _characterTransform(result));
        } catch (error) {
            _handleError(error);
        }
    };

    const getComics = async (offset) => {
        const credentials = _getApiCredentials();
        const url = `${comicsUrl}?limit=8&offset=${offset}&ts=${credentials.ts}&apikey=${credentials.publicKey}&hash=${credentials.hash}`;
        try{
            const item = await fetchData(url);
            return item.data.results.map((result) => _comicTransform(result));
        }catch(error){
            _handleError(error);
        }
    };

    return {loading, error, getCharacter, getCharacterDetails, getRandomCharacter, getCharacters, getComics};
}