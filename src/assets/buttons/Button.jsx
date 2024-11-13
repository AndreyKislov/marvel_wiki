import styled from 'styled-components';

export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    color: ${({theme}) => theme.color.text.light};
    text-transform: uppercase;
    padding: 8px 14px;
    background-color: ${({$primary, theme}) => $primary
            ? theme.color.btn.primary
            : theme.color.btn.secondary};
    border: none;
    clip-path: polygon(100% 73.51%, 89.45% 100%, 0% 100%, 0% 26.49%, 10.55% 0%, 100% 0%);
    width: ${({$width}) => $width || 'none'};
`;

export const LoadMoreButton = styled(Button)`
    width: 100%;
    margin-left: 53px;
    clip-path: polygon(100% 60%, 92.87% 100%, 0% 100%, 0% 40%, 7.13% 0%, 100% 0%);
`;

export default Button;

