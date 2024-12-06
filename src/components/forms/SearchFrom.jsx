import {styled, useTheme} from 'styled-components';
import Title from '../titles/Title.jsx';
import Button from '../buttons/Button.jsx';

const StyledSearchFrom = styled.div`
    padding: 25px;
    background: ${({theme}) => theme.color.form.background};
    position: sticky;
    top: 47%;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.35);
    margin-top: 20px;

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 30px;

    }

    input[type='text'] {
        border: none;
        box-shadow: 0 4px 4px 3px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 38px;
    }

`;

const StyledButton = styled(Button)`
    min-width: ${({$width}) => $width};
`;

export default function SearchFrom() {
    const theme = useTheme();
    return (
        <StyledSearchFrom>
            <Title $size='18px' $transform='none' $color={theme.color.text.dark} $margin='0 0 20px 0'>
                Or find a character by name:
            </Title>
            <form>
                <input type='text' placeholder='Enter name'/>
                <StyledButton $primary $width='100px'>Find</StyledButton>
            </form>
        </StyledSearchFrom>
    );
}