import {Col, Container, Row} from 'react-bootstrap';
import CardsContainer from '../cards-container/CardsContainer.jsx';
import CharacterInformation from '../character-information/CharacterInformation.jsx';
import SearchFrom from '../forms/SearchFrom.jsx';
import {StyledLoadMoreButton} from '../buttons/Button.jsx';
import {styled} from 'styled-components';
import bgImg from '../../img/bg.png';
import Title from '../titles/Title.jsx';
import {useEffect, useRef, useState} from 'react';
import MarvelService from '../../services/MarvelService.js';
import CharacterCard from '../character-card/CharacterCard.jsx';

const StyledCharactersSection = styled.section`
    margin-bottom: 45px;
    background: url(${bgImg}) no-repeat 100% 100%;
`;
styled(Title)`
    margin-bottom: 55px;
`;

export default function CharactersListSection() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [id, setId] = useState(0);
    const [offset, setOffset] = useState(210);
    const [btnVisible, setBtnVisible] = useState(true);
    const marvelService = new MarvelService();
    const ref = useRef([]);


    function updateCards() {
        setLoading(true);
        setError(false);
        marvelService.getCharacters(offset).then(item => {
            const len = ref.current.length;
            const cardComponents = item.map((character, index) => {
                return <CharacterCard ref={el => {
                    if(len < 9){
                        ref.current[index] = el;
                    }else {
                        ref.current[index + len] = el;
                    }
                }} onKeyDown={handleKeyDown} onClick={handleCard} key={character.id} character={character}/>;
            });
            if(cardComponents.length < 9){
                setBtnVisible(false);
            }
            setCards([...cards, ...cardComponents]);
            setLoading(false);
            setOffset(offset + 9);
        })
            .catch(error => {
                if (error.statusCode === 500) {
                    setTimeout(() => setLoading(false), 10000);
                }
                setError(true);
                setLoading(false);
                console.warn(error.toString());
            });
    }

    function handleCard(e, id) {
        e.preventDefault();
        setId(id);
    }

    function handleKeyDown(e, id) {
        if (e.key === 'Enter') {
            handleCard(e, id);
        }
    }

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
                        <SearchFrom/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 2, offset: 2}}>
                        <LoadMoreButton onClick={updateCards} visible={btnVisible} primary>Load more</LoadMoreButton>
                    </Col>
                </Row>
            </Container>
        </StyledCharactersSection>
    );
}

// eslint-disable-next-line react/prop-types
function LoadMoreButton({onClick, visible, primary, children}) {
    if(!visible){
        return null;
    }
    return (
        <StyledLoadMoreButton onClick={onClick} $primary = {primary}>{children}</StyledLoadMoreButton>
    );

}