import styled from 'styled-components';
import Title from '../titles/Title.jsx';
import Button from '../buttons/Button.jsx';
import logo from './../../img/logo.png';

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

export default function RandomCharacter() {
    return (
        <StyledRandomCharacter>
            <StyledTitle $transform='none'>Random character for today! <br/>
                Do you want to get to know him better?
            </StyledTitle>
            <Title $transform='none'>
                Or choose another one
            </Title>
            <Button $primary $width='100px'>Try it</Button>
            <img src={logo} alt='logo'/>
        </StyledRandomCharacter>
    );
}