import {styled} from 'styled-components';
import defaultImg from './../../img/default_marvel.jpg';
import Title from '../titles/Title.jsx';

const CharacterContainer = styled.div`
    background-color: ${({ theme }) => theme.color.card.background};
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.35);
    height: 320px;
    width: 230px;
    transition: box-shadow 0.2s, transform 0.2s ease-in-out;
    &:hover{
        transform: translateY(-8px);
        box-shadow: 0 4px 20px 1px  ${({ theme }) => theme.color.card.hoverShadow};

    }
    img{
        width: 100%;
        height: 62%;
    }
`;

export default function CharacterCard() {
    return (
        <>
        <CharacterContainer>
            <img src={defaultImg} alt='character'/>
            <Title $weight='500' $margin='10px 0 0 10px'>Character</Title>
        </CharacterContainer>
        </>
    );
}