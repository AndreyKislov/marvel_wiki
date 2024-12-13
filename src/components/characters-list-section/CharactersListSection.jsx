import {Col, Container, Row} from 'react-bootstrap';
import CardsContainer from '../cards-container/CardsContainer.jsx';
import CharacterInformation from '../character-information/CharacterInformation.jsx';
import SearchFrom from '../forms/SearchFrom.jsx';
import {StyledLoadMoreButton} from '../buttons/Buttons.jsx';
import {styled} from 'styled-components';
import bgImg from '../../img/bg.png';
import Title from '../titles/Title.jsx';
import {useCallback, useEffect, useRef, useState} from 'react';
import CharacterCard from '../character-card/CharacterCard.jsx';
import useMarvelService from '../../services/useMarvelService.js';

const StyledCharactersSection = styled.section`
    margin-bottom: 45px;
    background: url(${bgImg}) no-repeat 100% 100%;
`;


// eslint-disable-next-line react/prop-types
export default function CharactersListSection({characterName}) {
    const [cards, setCards] = useState([]);
    const [id, setId] = useState(0);
    const [offset, setOffset] = useState(210);
    const [btnVisible, setBtnVisible] = useState(true);

    const {loading, error, getCharacters} = useMarvelService();

    const ref = useRef([]);

    const handleCard = useCallback((e, id) => {
        setId(id);
    }, []);

    const handleKeyDown = useCallback((e, id) => {
        if (e.key === 'Enter') {
            handleCard(e, id);
        }
    }, [handleCard]);

    const updateCards = useCallback(()=>{
        getCharacters(offset)
            .then(item => {
                const len = ref.current.length;
                const cardComponents = item.map((character, index) => {
                    return <CharacterCard ref={el => {
                        if (len < 9) {
                            ref.current[index] = el;
                        } else {
                            ref.current[index + len] = el;
                        }
                    }} onKeyDown={handleKeyDown} onClick={handleCard} key={character.id} character={character}/>;
                });
                if (cardComponents.length < 9) {
                    setBtnVisible(false);
                }
                setCards(cards => [...cards, cardComponents]);
                setOffset(offset => offset + 9);
            })
            .catch(error => {
                console.warn(error.toString());            });

    }, [cards]);


    useEffect(() => {
        updateCards();
    }, []);

    useEffect(() => {
        const index = ref.current.length - 9;
        if (ref.current[index]) {
            ref.current[index].focus();
        }
    }, [cards]);

    return (
        <StyledCharactersSection>
            <Container>
                <Row>
                    <Col md={7}>
                        <CardsContainer cards={cards} error={error} loading={loading}/>
                    </Col>
                    <Col md={5}>
                        <CharacterInformation id={id}/>
                        <SearchFrom characterName={characterName}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 2, offset: 2}}>
                        {btnVisible ?
                            <StyledLoadMoreButton onClick={updateCards} $primary disabled={loading}>
                                {loading ? 'Wait' : 'Load More'}
                            </StyledLoadMoreButton> : null}

                    </Col>
                </Row>
            </Container>
        </StyledCharactersSection>
    );
}
