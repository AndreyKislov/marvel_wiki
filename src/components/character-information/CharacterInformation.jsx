import Title from '../titles/Title.jsx';
import {styled, useTheme} from 'styled-components';
import EmptyInformation from './EmptyInformation.jsx';
import Button from '../buttons/Button.jsx';
import Describe from '../describes/Describe.jsx';
import defaultImg from '../../img/default_marvel.jpg';
import {useEffect, useState} from 'react';
import Spinner from '../spinners/Spinner.jsx';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/useMarvelService.js';

const StyledCharacterInformation = styled.div`
    padding: 25px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.35);
    position: sticky;
    top: -45%;
    transition: top 1s ease;
    z-index: 10;
    background-color: ${({theme}) => theme.color.infoPanel.background};

    &:hover {
        top: 3%;
    }

    &:not(:hover) {
        top: -45%;
    }

    .character-img {
        width: 200px;
    }

    .btn-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .information-header {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
    }
`;

const ComicsLink = styled.a`
    display: block;
    box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, 0.35);
    text-decoration: none;
    width: 100%;
    cursor: pointer;
    padding: 3px 10px;
    color: ${({theme}) => theme.color.text.dark};
    margin-bottom: 8px;
`;

const StyledDescribe = styled(Describe)`
    max-height: 150px;
    overflow-y: auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.35);
    padding: 10px;
`;

const HandleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default function CharacterInformation({id = 0}) {
    const [character, setCharacter] = useState(null);
    const {loading, error, getCharacterDetails} = useMarvelService();


    function updateCharacter(id) {
        if (id !== 0) {
            getCharacterDetails(id)
                .then(item => {
                    setCharacter(item);
                })
                .catch(error => {
                    console.warn(error);
                });
        }
    }

    useEffect(() => {
        updateCharacter(id);
    }, [id]);

    const emptyId = !character && !loading && !error ? <EmptyInformation/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <LoadingMessage/> : null;
    const content = !loading && !error && character ? <View character={character}/> : null;
    return (
        <StyledCharacterInformation>
            {emptyId}
            {errorMessage}
            {spinner}
            {content}
        </StyledCharacterInformation>
    );
}

CharacterInformation.propTypes = {
    id: PropTypes.number,
};


// eslint-disable-next-line react/prop-types
function View({character: {name, thumbnail, description, urls, comics}}) {
    const theme = useTheme();
    // eslint-disable-next-line react/prop-types
    const comicsLink = comics.map(item => {
        return <ComicsLink key={item.id} href={item.resourceURI || ''}>{item.name}</ComicsLink>;
    });
    return (
        <>
            <div className='information-header'>
                <img className='character-img' src={thumbnail || defaultImg || ''} alt='character'/>
                <div className='btn-container'>
                    <Title $margin='0 0 35px 0' $color={theme.color.text.dark}>{name}</Title>
                    <a href={urls[0]}>
                        <Button $primary $width='100px'>Homepage</Button>
                    </a>
                    <a href={urls[1]}>
                        <Button $width='100px'>wiki</Button>
                    </a>
                </div>
            </div>
            <StyledDescribe>{description || 'No description available'}</StyledDescribe>
            <Title $margin='25px 0 10px 0' $size='18px' $color={theme.color.text.dark}>
                Comics:
            </Title>
            {comicsLink}
        </>
    );
}

function LoadingMessage() {
    return (
        <HandleContainer>
            <Spinner/>
        </HandleContainer>
    );
}

function ErrorMessage() {
    const theme = useTheme();
    return (
        <HandleContainer>
            <Title $color={theme.color.text.primary}>Please try again or come back later.</Title>
        </HandleContainer>
    );
}