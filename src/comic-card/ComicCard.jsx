import styled from 'styled-components';
import marvelImg from '../img/default_marvel.jpg';
import Title from '../components/titles/Title.jsx';
import {Transition} from 'react-transition-group';
import {Link} from 'react-router-dom';
import {forwardRef} from 'react';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: start;
    width: 100%;
    transition: box-shadow 0.2s, transform 0.2s ease-in-out;

    img {
        height: 400px;
        width: 100%;
    }
`;

const StyledTitle = styled(Title)`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.color.text.dark};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    
    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 20px 1px ${({theme}) => theme.color.card.hoverShadow};
    }

    &:focus {
        transform: translateY(-1px);
        box-shadow: 0 4px 20px 1px ${({theme}) => theme.color.card.hoverShadow};
        outline: none;
        outline-offset: 0;
        color: red;
    }
`;


// eslint-disable-next-line react/prop-types
const ComicCard = forwardRef(({card : {id, title, price, image}}, ref)=>{
    const duration = 500;
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
        <Transition timeout={duration} in={true}>
            {status => {
                return (
                        <StyledLink tabIndex={0} ref={ref} end='true' to={`${id}`}
                                    style={{...defaultStyles, ...transitionStyles[status]}}>
                            <StyledCard>
                                <img src={image || marvelImg || ''} alt='marvelImg'/>
                                <StyledTitle>
                                    {title}
                                </StyledTitle>
                                <StyledTitle $opacity='60%'>
                                    {price}
                                </StyledTitle>
                            </StyledCard>
                        </StyledLink>
                );
            }}
        </Transition>
    );
});
ComicCard.displayName = 'ComicCard';
export default ComicCard;