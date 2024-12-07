import styled, {useTheme} from 'styled-components';
import Title from '../titles/Title.jsx';
import Describe from '../describes/Describe.jsx';
import Button from '../buttons/Buttons.jsx';
import marvelImg from '../../img/default_marvel.jpg';
import Spinner from '../spinners/Spinner.jsx';


const StyledInfoBlock = styled.div`
    display: flex;
    padding: 35px 40px;
    column-gap: 30px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.35);
    min-height: 250px;

    img {
        width: 180px;
        height: 180px;
    }

    .info-text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .info-btns {
        display: flex;
        column-gap: 30px;
    }
`;

const StatusHandler = styled(StyledInfoBlock)`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.35);
    min-height: 250px;
`;

// eslint-disable-next-line react/prop-types
export default function RandomInfoBlock({character, loading, error}) {
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <LoadingMessage/> : null;
    const content = !(loading || error) ? <View character={character}/> : null;
    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    );
}

// eslint-disable-next-line react/prop-types
function View({character: {name, description, thumbnail, urls}}) {
    const theme = useTheme();
    return (
        <StyledInfoBlock>
            <img
                src={thumbnail || marvelImg || ''}
                alt="character image"
            />
            <div className='info-text'>
                <Title $color={theme.color.text.dark}>
                    {name || 'No name available'}
                </Title>
                <Describe>
                    {description || 'No description available'}
                </Describe>
                <div className='info-btns'>
                    <Button $primary $width='100px' href={urls[0] || 'Link 1'}>
                        detail
                    </Button>
                    <Button $width='100px' href={urls[1] || 'Link 2'}>
                        wiki
                    </Button>
                </div>
            </div>
        </StyledInfoBlock>
    );
}

function ErrorMessage() {
    const theme = useTheme();
    return (
        <StatusHandler>
            <Title $color={theme.color.text.primary}>Please try again or come back later.</Title>
        </StatusHandler>
    );
}

function LoadingMessage() {
    return (
        <StatusHandler>
            <Spinner/>
        </StatusHandler>
    );
}
