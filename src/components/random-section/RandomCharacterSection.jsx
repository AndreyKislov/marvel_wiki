import {Col, Container, Row} from 'react-bootstrap';
import RandomInfoBlock from '../random-info-block/RandomInfoBlock.jsx';
import Title from '../titles/Title.jsx';
import Button from '../buttons/Buttons.jsx';
import logo from '../../img/logo.png';
import {styled} from 'styled-components';
import {useEffect, useState} from 'react';
import useMarvelService from '../../services/useMarvelService.js';


const StyledRandomSection = styled.section`
    margin-bottom: 55px;
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


// eslint-disable-next-line react/prop-types
export default function RandomCharacter({setCharacterName}) {
    const [character, setCharacter] = useState({
        id: '',
        name: '',
        description: '',
        thumbnail: '',
        urls: ['', ''],
    });
    const {loading, error, getRandomCharacter} = useMarvelService();


    function updateState() {
        getRandomCharacter()
            .then(character => {
                setCharacter(character);
                setCharacterName(character.name);
            })
            .catch(error => {
                console.warn(error.toString());
            });

    }

    useEffect(() => {
        updateState();
    }, []);

    return (
        <StyledRandomSection>
            <Container>
                <Row>
                    <Col md={6}>
                        <RandomInfoBlock character={character} loading={loading} error={error}/>
                    </Col>
                    <Col md={6}>
                        <StyledRandomCharacter>
                            <StyledTitle $transform='none'>Random character for today! <br/>
                                Do you want to get to know him better?
                            </StyledTitle>
                            <Title $transform='none'>
                                Or choose another one
                            </Title>
                            <Button $primary $width='100px' onClick={updateState} disabled={loading}>
                                {loading ? 'Wait' : 'Try it'}
                            </Button>
                            <img src={logo} alt='logo'/>
                        </StyledRandomCharacter>
                    </Col>
                </Row>
            </Container>
        </StyledRandomSection>
    );
}