import {styled} from 'styled-components';
import Spinner from '../spinners/Spinner.jsx';
import {memo} from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage.jsx';
import {TransitionGroup} from 'react-transition-group';

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
const CardsContainer = memo(({cards, error, loading}) =>{
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = <View cards = {cards}/>;
    return (
        <TransitionGroup>
            {content}
            <StyledHandleContainer>
                {errorMessage}
                {spinner}
            </StyledHandleContainer>
        </TransitionGroup>
    ); 
});
CardsContainer.displayName = 'CardsContainer';



export default CardsContainer;


// eslint-disable-next-line react/prop-types
function View({cards}) {
    return (
        <>
            <StyledCardsContainer>
                {cards}
            </StyledCardsContainer>
        </>
    );
}


