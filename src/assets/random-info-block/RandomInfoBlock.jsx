import styled, {useTheme} from 'styled-components';
import marvelDefault from './../../img/default_marvel.jpg';
import Title from '../titles/Title.jsx';
import Describe from '../describes/Describe.jsx';
import Button from '../buttons/Button.jsx';

const StyledInfoBlock = styled.div`
    display: flex;
    padding: 35px 40px;
    column-gap: 30px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.35);

    img {
        width: 180px;
        height: 180px;
    }
    .info-text{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .info-btns{
        display: flex;
        column-gap: 30px;
    }
`;

export default function RandomInfoBlock() {
    const theme = useTheme();
    return (
        <StyledInfoBlock>
            <img src={marvelDefault} alt="marvel default"/>
            <div className='info-text'>
                <Title $color={theme.color.text.dark}>Thor</Title>
                <Describe>
                    As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the
                    enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's
                    quite smart...
                </Describe>
                <div className='info-btns'>
                    <Button  $primary $width='100px'>Homepage</Button>
                    <Button $width='100px'>wiki</Button>
                </div>
            </div>
        </StyledInfoBlock>
    );
}