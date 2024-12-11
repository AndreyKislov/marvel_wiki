import {styled} from 'styled-components';
import defaultImg from '../../img/default_marvel.jpg';
import Title from '../titles/Title.jsx';
import {forwardRef, memo, useRef} from 'react';
import {Transition} from 'react-transition-group';

const CharacterContainer = styled.div`
    background-color: ${({theme}) => theme.color.card.background};
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.35);
    height: 320px;
    width: 230px;
    transition: box-shadow 0.2s, transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 4px 20px 1px ${({theme}) => theme.color.card.hoverShadow};
    }

    &:focus {
        outline: none;
        outline-offset: 0;
        transform: translateY(-8px);
        box-shadow: 0 4px 20px 1px ${({theme}) => theme.color.card.hoverShadow};
    }

    img {
        width: 100%;
        height: 62%;
    }
`;


// eslint-disable-next-line react/prop-types
const CharacterCard = memo(forwardRef(({character: {id, thumbnail, name}, onClick, onKeyDown}, ref) => {
    const duration = 500;
    const nodeRef = useRef(null);
    const transitionStyles = {
        entered: {opacity: 1},
        entering: {opacity: 1},
        exiting: {opacity: 0},
        exited: {opacity: 0},
    };
    const defaultStyles = {
        transition: `opacity ${duration}ms ease-in-out`,
    };
    return (
            <Transition timeout={duration} in={true} nodeRef={nodeRef}>
                {status => {
                    return (
                        <div style={{...defaultStyles, ...transitionStyles[status]}}>
                            <CharacterContainer
                                ref={ref}
                                tabIndex={0}
                                onClick={(e) => onClick(e, id)}
                                onKeyDown={(e) => onKeyDown(e, id)}>
                                <img src={thumbnail || defaultImg} alt="character"/>
                                <Title $weight="500" $margin="10px 0 0 10px">{name}</Title>
                            </CharacterContainer>
                        </div>

                    );
                }}
            </Transition>

        );
    }
));

export default CharacterCard;