import {Col, Container, Row} from 'react-bootstrap';
import ComicsPreview from '../comics-preview/ComicsPreview.jsx';
import {LoadMoreButton} from '../buttons/Button.jsx';
import styled, {ThemeContext} from 'styled-components';
import marvelImg from '../../img/default_marvel.jpg';
import Title from '../titles/Title.jsx';
import {useContext} from 'react';
import Header from '../header/Header.jsx';

const ComicsSection = styled.section`
    margin-bottom: 50px;
`;

const StyledButton = styled(LoadMoreButton)`
    margin: 0;
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px 65px;
    margin-bottom: 45px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: start;
    width: 100%;
    &:hover{
        transform: translateY(-8px);
        box-shadow: 0 4px 20px 1px  ${({ theme }) => theme.color.card.hoverShadow};

    img {
        height: 400px;
        width: 100%;
    }
`;


export default function ComicsPage() {
    const {color} = useContext(ThemeContext);
    return (
        <>
            <Header active='comics'/>
            <Container>
                <ComicsPreview/>
                <ComicsSection>
                    <StyledContainer>
                        <Card>
                            <img src={marvelImg} alt='marvelImg'/>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $width='85%' $margin='0'>
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </Title>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $opacity='60%'>
                                9.99$
                            </Title>
                        </Card>
                        <Card>
                            <img src={marvelImg} alt='marvelImg'/>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $width='85%' $margin='0'>
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </Title>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $opacity='60%'>
                                9.99$
                            </Title>
                        </Card>
                        <Card>
                            <img src={marvelImg} alt='marvelImg'/>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $width='85%' $margin='0'>
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </Title>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $opacity='60%'>
                                9.99$
                            </Title>
                        </Card>
                        <Card>
                            <img src={marvelImg} alt='marvelImg'/>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $width='85%' $margin='0'>
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </Title>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $opacity='60%'>
                                9.99$
                            </Title>
                        </Card>
                        <Card>
                            <img src={marvelImg} alt='marvelImg'/>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $width='85%' $margin='0'>
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </Title>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $opacity='60%'>
                                9.99$
                            </Title>
                        </Card>
                        <Card>
                            <img src={marvelImg} alt='marvelImg'/>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $width='85%' $margin='0'>
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </Title>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $opacity='60%'>
                                9.99$
                            </Title>
                        </Card>
                        <Card>
                            <img src={marvelImg} alt='marvelImg'/>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $width='85%' $margin='0'>
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </Title>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $opacity='60%'>
                                9.99$
                            </Title>
                        </Card>
                        <Card>
                            <img src={marvelImg} alt='marvelImg'/>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $width='85%' $margin='0'>
                                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                            </Title>
                            <Title $color={color.text.dark} $weight='500' $size='14px' $opacity='60%'>
                                9.99$
                            </Title>
                        </Card>
                    </StyledContainer>
                    <Row>
                        <Col md={{span: 2, offset: 5}}>
                            <StyledButton $primary>Load more</StyledButton>
                        </Col>
                    </Row>
                </ComicsSection>
            </Container>
        </>

    );
}