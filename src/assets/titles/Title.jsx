import styled from 'styled-components';

const Title = styled.h2`
    display: inline-block;
    font-weight: ${({ $weight = '700' }) => $weight};
    color: ${({ $color, theme }) => $color || theme.color.text.light};
    font-size: ${({ $size = '22px'}) => $size};
    text-transform: ${({ $transform = 'uppercase' }) => $transform};
    margin: ${({ $margin }) => $margin};
    .span-dark{
        color: ${({ theme }) => theme.color.text.dark};
    }
`;

export default Title;


