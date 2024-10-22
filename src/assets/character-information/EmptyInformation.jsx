import {styled, useTheme} from 'styled-components';
import Title from '../titles/Title.jsx';

const StyledEmptyInformation = styled.div`
    .empty-string{
        display: inline-block;
        height: 35px;
        background-color: #C4C4C4;
        width: 100%;
        margin: 0 0 15px 0;
        &:last-child{
            margin: 0;
        }
        &__circle{
            height: 16px;  
        }
    }
    .circle{
        display: inline-block;
        border-radius: 50%;
        background-color: #C4C4C4;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        flex: 0 0 auto;
    }
    .circle-string{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
`;

const StyledTitle = styled(Title)`
    display: block;
    text-align: center;
`;



export default function EmptyInformation() {
    const theme = useTheme();
    return (
        <StyledEmptyInformation>
            <StyledTitle $transform='none' $size='18px'
                         $color={theme.color.text.dark} $margin={'0 0 35px 0'}>
                Please select a character to see information
            </StyledTitle>
            <div className='circle-string'>
                <div className='circle'/>
                <div className='empty-string empty-string__circle'/>
            </div>
            <div className='empty-string'/>
            <div className='empty-string'/>
            <div className='empty-string'/>
        </StyledEmptyInformation>
    );
}