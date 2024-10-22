import {styled} from 'styled-components';
import CharacterCard from '../character-card/CharacterCard.jsx';

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 30px 25px;
    margin-bottom: 45px;
`;

export default function CardsContainer() {
    return (
        <StyledContainer>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
        </StyledContainer>
    );
    
}