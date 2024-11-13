import {Col, Container, Row} from 'react-bootstrap';
import ComicsPreview from '../comics-preview/ComicsPreview.jsx';
import marvelImg from '../../img/default_marvel.jpg';
import Title from '../titles/Title.jsx';
import Describe from '../describes/Describe.jsx';
import styled, {ThemeContext} from 'styled-components';
import {useContext} from 'react';
import Header from '../header/Header.jsx';

const ComicContainer = styled.section`
    margin-bottom: 150px;
`;

const ComicImage = styled.img`
    width: 300px;
    height: 450px;
`;

const ComicText = styled.div`

`;

export default function ComicPage() {
    const {color} = useContext(ThemeContext);
    return (
        <>
            <Header/>
            <Container>
                <ComicContainer>
                    <Row>
                        <Col md={12}>
                            <ComicsPreview/>
                        </Col>
                        <Col md={4}>
                            <ComicImage src={marvelImg} alt='marvel image'/>
                        </Col>
                        <Col md={6}>
                            <ComicText>
                                <Title $color={color.text.dark} $margin='0 0 30px 0'>
                                    X-Men: Days of Future Past
                                </Title>
                                <Describe $size='18px' $margin='0 0 40px 0'>
                                    Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels
                                    stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring
                                    the first appearance of Alpha Flight, the return of the Wendigo, the history of the
                                    X-Men from Cyclops himself...and a demon for Christmas!?
                                </Describe>
                                <Describe $size='18px' $margin='0 0 30px 0'>
                                    144 pages
                                </Describe>
                                <Describe $size='18px' $margin='0 0 30px 0'>
                                    Language: en-us
                                </Describe>
                            </ComicText>
                            <Title $color={color.text.primary} $size='24px' $weight='700'>
                                9.99$
                            </Title>
                        </Col>
                    </Row>
                </ComicContainer>

            </Container>
        </>

    );
}
