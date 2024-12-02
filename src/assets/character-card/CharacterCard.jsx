import {styled} from 'styled-components';
import defaultImg from './../../img/default_marvel.jpg';
import Title from '../titles/Title.jsx';
import {forwardRef} from 'react';

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
    &:focus {
        outline: none;
        outline-offset: 0;
        transform: translateY(-8px);
        box-shadow: 0 4px 20px 1px ${({theme}) => theme.color.card.hoverShadow};
    }
    img{
        width: 100%;
        height: 62%;
    }
`;


// eslint-disable-next-line react/display-name,react/prop-types
const CharacterCard = forwardRef(({ character: { id, thumbnail, name },
                                      // eslint-disable-next-line react/prop-types
                                      onClick, onKeyDown }, ref) => {
    return (
            <CharacterContainer
                ref={ref}
                tabIndex={0}
                onClick={(e) => onClick(e, id)}
                onKeyDown={(e) => onKeyDown(e, id)}>
                <img src={thumbnail || defaultImg} alt="character" />
                <Title $weight="500" $margin="10px 0 0 10px">{name}</Title>
            </CharacterContainer>
    );
});

export default CharacterCard;