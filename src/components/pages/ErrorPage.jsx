import styled from 'styled-components';
import {useNavigate, useParams} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {Button} from './../buttons/Buttons.jsx';

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: ${({theme}) => theme.color.background};
    text-align: center;
    padding: 20px;
`;

const ErrorTitle = styled.h1`
    font-size: 80px;
    color: ${({theme}) => theme.color.text.primary || '#333'};
    margin: 0;
`;

const ErrorSubtitle = styled.h2`
    font-size: 24px;
    color: ${({theme}) => theme.color.text.secondary || '#666'};
    margin: 20px 0;
`;

const StyledButton = styled(Button)`
    margin-top: 30px;
    font-size: 18px;
    border-radius: 10px;
    clip-path: none;

`;

const GifWrapper = styled.div`
    margin-top: 20px;
    max-width: 400px;

    img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
`;


// eslint-disable-next-line react/prop-types
export default function ErrorPage({defCode = 404}) {
    const {code} = useParams();
    const navigate = useNavigate();


    return (
        <Container>
        <PageWrapper>
                <ErrorTitle>{code || defCode}</ErrorTitle>
                <ErrorSubtitle>Page Not Found or Server Unavailable

                    Oops! It seems like the page you’re looking for doesn’t exist or the server is temporarily unavailable.

                    Please check the URL for accuracy, or try again later. If the problem persists, feel free to contact us
                    for assistance. </ErrorSubtitle>
                <StyledButton onClick={()=>{navigate('/characters', {replace: true});}} $primary>Go Back to Home</StyledButton>
                <GifWrapper>
                    <img
                        src="https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif"
                        alt="Confused Travolta"
                    />
                </GifWrapper>
        </PageWrapper>
</Container>
    );
}
