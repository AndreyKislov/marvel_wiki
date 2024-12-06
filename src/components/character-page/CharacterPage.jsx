import ComicsPreview from '../comics-preview/ComicsPreview.jsx';
import styled, {ThemeContext} from 'styled-components';
import Title from '../titles/Title.jsx';
import {Col, Container, Row} from 'react-bootstrap';
import marvelImg from '../../img/default_marvel.jpg';
import Describe from '../describes/Describe.jsx';
import {useContext} from 'react';
import Header from '../header/Header.jsx';


const CharacterContainer = styled.section`
    margin-bottom: 140px;
`;
const CharacterText = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    margin-left: 50px;
`;
const CharacterImage = styled.img`
    width: 100%;
`;
export default function CharacterPage() {
    const theme = useContext(ThemeContext);
    return (
        <CharacterContainer>
            <Header/>
            <Container>
                <Row>
                    <Col md={12}>
                        <ComicsPreview/>
                    </Col>
                    <Col md={4}>
                        <CharacterImage src={marvelImg} alt='marvel image'/>
                    </Col>
                    <Col md={6}>
                        <CharacterText>
                            <Title $color={theme.color.text.dark} $weight='500'>
                                Character
                            </Title>
                            <Describe $size='18px'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque blanditiis
                                cum debitis enim eum incidunt laborum magni nesciunt odit, optio quaerat quasi
                                recusandae sint sit tempora, vero. Eveniet, itaque?
                                Consequatur cumque, ex exercitationem illo in magni natus omnis possimus sed ut?
                                Ipsum nobis nulla odio perspiciatis repudiandae sapiente, tempora tenetur
                                voluptates. Adipisci error eveniet officiis ratione repellat, sit voluptatem.
                                Autem consequatur, cumque cupiditate excepturi in, ipsa ipsum, iste itaque labore
                                maiores molestiae odio praesentium quam quasi rem sapiente tempora tenetur unde
                                veniam veritatis? Adipisci asperiores mollitia numquam qui sint.
                            </Describe>
                        </CharacterText>
                    </Col>
                </Row>
            </Container>
        </CharacterContainer>
    );
}