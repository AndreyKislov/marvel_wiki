import {Col, Container, Row} from 'react-bootstrap';
import ComicsPreview from '../comics-preview/ComicsPreview.jsx';
import {StyledLoadMoreButton} from '../buttons/Button.jsx';
import styled, {ThemeContext} from 'styled-components';
import marvelImg from '../../img/default_marvel.jpg';
import Title from '../titles/Title.jsx';
import {useContext, useEffect, useRef, useState} from 'react';
import useMarvelService from '../../services/useMarvelService.js';
import ErrorMessage from '../errorMessage/ErrorMessage.jsx';
import Spinner from '../spinners/Spinner.jsx';

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

const Card = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: start;
    width: 100%;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 20px 1px ${({theme}) => theme.color.card.hoverShadow};
    }

    &:focus {
        transform: translateY(-1px);
        box-shadow: 0 4px 20px 1px ${({theme}) => theme.color.card.hoverShadow};
        outline: none;
        outline-offset: 0;
    }

    img {
        height: 400px;
        width: 100%;
    }
`;

const StyledHandleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;


export default function ComicsPage() {
    const {color} = useContext(ThemeContext);

    const [offset, setOffset] = useState(0);
    const [cards, setCards] = useState([]);
    const ref = useRef([]);

    const {loading, error, getComics} = useMarvelService();

    function updateCards() {
        getComics(offset)
            .then(res => {
                const len = ref.current.length;
                const cardsComponents = res.map((card, index) => {
                    return <Card key={card.id}
                                 ref={el => {
                                     if (len < 8) {
                                         ref.current[index] = el;
                                     } else {
                                         ref.current[index + len] = el;
                                     }
                                 }}
                                 tabIndex={0}>
                        <img src={card.image || marvelImg || ''} alt='marvelImg'/>
                        <Title $color={color.text.dark} $weight='500' $size='14px' $width='85%' $margin='0'>
                            {card.title}
                        </Title>
                        <Title $color={color.text.dark} $weight='500' $size='14px' $opacity='60%'>
                            {card.price}
                        </Title>
                    </Card>;
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
            <Container>
                <ComicsPreview/>
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
                            <StyledButton onClick={updateCards} $primary>Load more</StyledButton>
                        </Col>
                    </Row>
                </ComicsSection>
            </Container>
        </>

    );
}