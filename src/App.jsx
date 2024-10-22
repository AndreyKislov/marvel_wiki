import theme from './style/theme.js';
import './style/bootstrap-reboot.min.css';
import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider, styled} from 'styled-components';
import RandomInfoBlock from './assets/random-info-block/RandomInfoBlock.jsx';
import {Col, Container, Row} from 'react-bootstrap';
import RandomCharacter from './assets/random-character/RandomCharacter.jsx';
import CardsContainer from './assets/cards-container/CardsContainer.jsx';
import Button from './assets/buttons/Button.jsx';
import CharacterInformation from './assets/character-information/CharacterInformation.jsx';
import SearchFrom from './assets/forms/SearchFrom.jsx';
import Header from './assets/header/Header.jsx';

const RandomSection = styled.section`
    margin-bottom: 55px;
`;
const CharactersListSection = styled.section`
    margin-bottom: 45px;
`;
const StyledButton = styled(Button)`
    width: 100%;
    margin-left: 53px;
    clip-path: polygon(100% 60%, 92.87% 100%, 0% 100%, 0% 40%, 7.13% 0%, 100% 0%);
`;

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <RandomSection>
                <Container>
                    <Row>
                        <Col md={6}>
                            <RandomInfoBlock/>
                        </Col>
                        <Col md={6}>
                            <RandomCharacter/>
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
                            <StyledButton $primary>Load more</StyledButton>
                        </Col>
                    </Row>
                </Container>
            </CharactersListSection>
        </ThemeProvider>
    );
}




