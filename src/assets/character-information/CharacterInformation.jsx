import Title from '../titles/Title.jsx';
import {styled, useTheme} from 'styled-components';
import EmptyInformation from './EmptyInformation.jsx';
import Button from '../buttons/Button.jsx';
import Describe from '../describes/Describe.jsx';
import defaultImg from './../../img/default_marvel.jpg';

const StyledCharacterInformation = styled.div`
    padding: 25px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.35);
    position: sticky;
    top: -45%;
    transition: top 1s ease;
    z-index: 10;
    background-color: ${({theme}) => theme.color.infoPanel.background};

    &:hover {
        top: 3%;
    }

    &:not(:hover) {
        top: -45%;
    }

    .character-img {
        width: 150px;
    }

    .btn-container {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .information-header {
        display: flex;
        column-gap: 25px;
        margin-bottom: 10px;
    }
`;

const ComicsLink = styled(Title)`
    box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, 0.35);
    text-decoration: none;
    width: 100%;
    cursor: pointer;
    padding: 3px 10px;
`;

const StyledDescribe = styled(Describe)`
    max-height: 150px;
    overflow-y: auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.35);
    padding: 10px;
`;


// eslint-disable-next-line react/prop-types
export default function CharacterInformation({data}) {
    const theme = useTheme();
    return (
        <StyledCharacterInformation>
            {!data ? (
                <EmptyInformation/>
            ) : (
                <>
                    <div className='information-header'>
                        <img className='character-img' src={defaultImg} alt='character'/>
                        <div className='btn-container'>
                            <Title $margin='0 0 35px 0' $color={theme.color.text.dark}>Character</Title>
                            <Button $primary $width='100px'>Homepage</Button>
                            <Button $width='100px'>wiki</Button>
                        </div>
                    </div>
                    <StyledDescribe>
                        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey,
                        and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel,
                        the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
                        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to
                        the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the
                        Prose Edda.
                        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey,
                        and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel,
                        the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
                        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to
                        the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the
                        Prose Edda.
                    </StyledDescribe>
                    <Title $margin='25px 0 10px 0' $size='18px' $color={theme.color.text.dark}>
                        Comics:
                    </Title>
                    <ComicsLink as='a' href='#' $margin='0 0 15px 0' $color={theme.color.text.dark} $weight='500' $transform='none' $size='14px'>
                        All-Winners Squad: Band of Heroes (2011) #3
                    </ComicsLink>
                    <ComicsLink as='a' href='#' $margin='0 0 15px 0' $color={theme.color.text.dark} $weight='500' $transform='none' $size='14px'>
                        Alpha Flight (1983) #50
                    </ComicsLink>
                    <ComicsLink as='a' href='#' $margin='0 0 15px 0' $color={theme.color.text.dark} $weight='500' $transform='none' $size='14px'>
                        Amazing Spider-Man (1999) #503
                    </ComicsLink>
                    <ComicsLink as='a' href='#' $margin='0 0 15px 0' $color={theme.color.text.dark} $weight='500' $transform='none' $size='14px'>
                        Amazing Spider-Man (1999) #504
                    </ComicsLink>
                    <ComicsLink as='a' href='#' $margin='0 0 15px 0' $color={theme.color.text.dark} $weight='500' $transform='none' $size='14px'>
                        AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                    </ComicsLink>
                    <ComicsLink as='a' href='#' $margin='0 0 15px 0' $color={theme.color.text.dark} $weight='500' $transform='none' $size='14px'>
                        Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                    </ComicsLink>
                </>
            )}
        </StyledCharacterInformation>
    );
}