import {Col, Container, Row} from 'react-bootstrap';
import ComicsPreview from '../comics-preview/ComicsPreview.jsx';
import styled from 'styled-components';
import {useEffect, useRef, useState} from 'react';
import useMarvelService from '../../services/useMarvelService.js';
import ErrorMessage from '../errorMessage/ErrorMessage.jsx';
import Spinner from '../spinners/Spinner.jsx';
import {StyledLoadMoreButton} from '../buttons/Buttons.jsx';
import {TransitionGroup} from 'react-transition-group';
import ComicCard from '../../comic-card/ComicCard.jsx';
import Header from "../header/Header.jsx";

const ComicsSection = styled.section`
    margin-bottom: 50px;
`;

const StyledButton = styled(StyledLoadMoreButton)`
    margin: 0;
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px 65px;
    margin-bottom: 45px;
`;
const StyledHandleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;


export default function ComicsPage() {
    const [offset, setOffset] = useState(0);
    const [cards, setCards] = useState([]);
    const ref = useRef([]);

    const {loading, error, getComics} = useMarvelService();

    function updateCards() {
        getComics(offset)
            .then(res => {
                const len = ref.current.length;
                const cardsComponents = res.map((card, index) => {
                    return (
                        <ComicCard key={card.id} card={card} ref={el => {
                            if (len < 8) {
                                ref.current[index] = el;
                            } else {
                                ref.current[index + len] = el;
                            }
                        }
                        }/>
                    );
                });
                setCards(cards => ([...cards, ...cardsComponents]));
                setOffset(offset => offset + 8);
            })
            .catch(error => console.warn(error.toString()));
    }

    useEffect(() => {
        updateCards();
    }, []);

    useEffect(() => {
        const index = ref.current.length - 8;
        if (ref.current[index]) {
            ref.current[index].focus();
        }
    }, [cards]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;


    return (
        <>
            <Header/>
            <TransitionGroup>
                <ComicsPreview/>
                <Container>
                    <ComicsSection>
                        <StyledContainer>
                            {cards}
                        </StyledContainer>
                        <StyledHandleContainer>
                            {errorMessage}
                            {spinner}
                        </StyledHandleContainer>
                        <Row>
                            <Col md={{span: 2, offset: 5}}>
                                <StyledButton onClick={updateCards} $primary disabled={loading}>
                                    {loading ? 'Wait' : 'Load More'}
                                </StyledButton>
                            </Col>
                        </Row>
                    </ComicsSection>
                </Container>
            </TransitionGroup>
        </>


    );
}