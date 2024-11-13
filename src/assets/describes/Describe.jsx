import styled from 'styled-components';

const Describe = styled.p`
    font-weight: 400;
    font-size: ${({$size = '14px'}) => $size};
    color: ${({theme}) => theme.color.text.dark};
    margin: ${({$margin}) => $margin};
`;

export default Describe;