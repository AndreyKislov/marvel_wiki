import {styled, useTheme} from 'styled-components';
import Title from '../titles/Title.jsx';
import Spinner from '../spinners/Spinner.jsx';

const StyledCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 30px 25px;
    margin-bottom: 45px;
`;

const StyledHandleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;


// eslint-disable-next-line react/prop-types
export default function CardsContainer({cards, error, loading}) {


    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = <View cards = {cards}/>;
    return (
        <>
            {content}
            <StyledHandleContainer>
                {errorMessage}
                {spinner}
            </StyledHandleContainer>
        </>
    );
}

// eslint-disable-next-line react/prop-types
function View({cards}) {
    return (
        <StyledCardsContainer>
            {cards}
        </StyledCardsContainer>
    );
}

function ErrorMessage() {
    const theme = useTheme();
    return (
        <Title $color={theme.color.text.primary}>Please try again or come back later.</Title>
    );
}
