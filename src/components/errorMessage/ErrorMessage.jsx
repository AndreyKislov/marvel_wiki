import {useTheme} from 'styled-components';
import Title from '../titles/Title.jsx';

export default function ErrorMessage() {
    const theme = useTheme();
    return (
        <Title $color={theme.color.text.primary}>Please try again or come back later.</Title>
    );
}