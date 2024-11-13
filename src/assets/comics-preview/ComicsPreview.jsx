import styled from 'styled-components';
import logoFirst from '../../img/comics-preview-avengers.png';
import logoSecond from '../../img/comics-preview-logo.png';
import Title from '../titles/Title.jsx';


const PreviewContainer = styled.div`
    background: ${props => props.theme.color.comicsPreview.dark} url('${logoSecond}') no-repeat 96%;
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 83px;
    margin-bottom: 50px;

    img {
        margin-left: 4%;
    }
`;

export default function ComicsPreview() {
    return (
            <PreviewContainer>
                <img src={logoFirst} alt="Comics Preview"/>
                <Title $size='24px' $weight='500'>New comics every week! <br/>
                    Stay tuned!</Title>
            </PreviewContainer>
    );
}