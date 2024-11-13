import {Col, Container, Row} from 'react-bootstrap';
import CardsContainer from '../cards-container/CardsContainer.jsx';
import CharacterInformation from '../character-information/CharacterInformation.jsx';
import SearchFrom from '../forms/SearchFrom.jsx';
import {styled, useTheme} from 'styled-components';
import Button, {LoadMoreButton} from '../buttons/Button.jsx';
import bgImg from '../../img/bg.png';
import Header from '../header/Header.jsx';
import Title from '../titles/Title.jsx';
import {useEffect, useState} from 'react';
import MarvelService from '../../services/MarvelService.js';
import logo from '../../img/logo.png';
import RandomInfoBlock from '../random-info-block/RandomInfoBlock.jsx';


const RandomSection = styled.section`
    margin-bottom: 55px;
`;
const CharactersListSection = styled.section`
    margin-bottom: 45px;
    background: url(${bgImg}) no-repeat 100% 100%;
`;
const StyledRandomCharacter = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #232222;
    padding: 35px 40px;
    box-shadow: 0 4px 20px 3px rgba(0, 0, 0, 0.35);

    img {
        position: absolute;
        right: -35px;
        bottom: 20px;
    }
`;
const StyledTitle = styled(Title)`
    margin-bottom: 55px;
`;


export default function CharactersPage() {
    useTheme();
    const [character, setCharacter] = useState({
        id: '',
        name: '',
        description: '',
        thumbnail: '',
        urls: ['', ''],
    });
    const [loading, setLoading] = useState(true);
    const marvelService = new MarvelService();

    function onChange(character) {
        if (character && character.id &&
            character.name &&
            character.thumbnail && Array.isArray(character.urls) && character.urls[0].url && character.urls[1].url) {
            setCharacter(character);
            setLoading(false);
        }
    }

    function updateState() {
        marvelService.getRandomCharacter().then(response => {
            onChange(response);
        }).catch(error => {
            if(error.statusCode === 500 ){
                setTimeout(() => setLoading(false), 10000);
            }
            console.warn(error.toString());
        });
    }

    function handleClick() {
        setLoading(true);
        updateState();
    }

    useEffect(() => {
        updateState();
    }, []);

    return (
        <>
            <Header active='characters'/>
            <RandomSection>
                <Container>
                    <Row>
                        <Col md={6}>
                            <RandomInfoBlock character={character} loading={loading} />
                        </Col>
                        <Col md={6}>
                            <StyledRandomCharacter>
                                <StyledTitle $transform='none'>Random character for today! <br/>
                                    Do you want to get to know him better?
                                </StyledTitle>
                                <Title $transform='none'>
                                    Or choose another one
                                </Title>
                                <Button $primary $width='100px' onClick={handleClick} disabled={loading}>
                                    {loading ? 'Wait' : 'Try it'}
                                </Button>
                                <img src={logo} alt='logo'/>
                            </StyledRandomCharacter>
                        </Col>
                    </Row>
                </Container>
            </RandomSection>
            <CharactersListSection>
                <Container>
                    <Row>
                        <Col md={7}>
                            <CardsContainer/>
                        </Col>
                        <Col md={5}>
                            <CharacterInformation data/>
                            <SearchFrom/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span: 2, offset: 2}}>
                            <LoadMoreButton $primary>Load more</LoadMoreButton>
                        </Col>
                    </Row>
                </Container>
            </CharactersListSection>
        </>
    );
}