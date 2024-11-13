import styled from 'styled-components';

const Title = styled.h2`
    display: inline-block;
    font-weight: ${({ $weight = '700' }) => $weight};
    color: ${({ $color, theme }) => $color || theme.color.text.light};
    font-size: ${({ $size = '22px'}) => $size};
    text-transform: ${({ $transform = 'uppercase' }) => $transform};
    margin: ${({ $margin }) => $margin};
    width: ${({ $width = 'none' }) => $width};
    opacity: ${({ $opacity = '100%' }) => $opacity};

    // .span-dark{
    //     color: ${({ theme }) => theme.color.text.dark};
    // }
    @media (max-width: 1300px) {
        font-size: ${({ $size = '22px' }) => {
            return `calc(${parseInt($size, 10)}px * 0.8)`; 
        }};
    }
`;

export default Title;


