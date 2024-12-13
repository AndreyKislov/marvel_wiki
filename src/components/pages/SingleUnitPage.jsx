import {Col, Container, Row} from 'react-bootstrap';
import ComicsPreview from '../comics-preview/ComicsPreview.jsx';
import marvelImg from '../../img/default_marvel.jpg';
import Title from '../titles/Title.jsx';
import Describe from '../describes/Describe.jsx';
import styled, {ThemeContext} from 'styled-components';
import {useContext, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import useMarvelService from '../../services/useMarvelService.js';
import Spinner from '../spinners/Spinner.jsx';
import {SwitchTransition, Transition} from 'react-transition-group';
import Header from '../header/Header.jsx';

const ComicContainer = styled.section`
    margin-bottom: 150px;
`;

const ComicImage = styled.img`
    width: 300px;
    height: 450px;
    margin-bottom: 80px;
`;

const StyledHandleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 130px
`;

export default function SingleUnitPage() {
    const {color} = useContext(ThemeContext);
    const params = useParams();
    const {loading, error, getComic, getCharacterDetail} = useMarvelService();
    const [data, setData] = useState({});
    const navigate = useNavigate();


    const nodeRef = useRef(null);
    const duration = 500;

    const transitionStyles = {
        entered: {opacity: 1},
        entering: {opacity: 1},
        exited: {opacity: 0},
        exiting: {opacity: 0},
    };
    const defaultStyles = {
        transition: `opacity ${duration}ms ease-in-out`,
    };

    const updateDate = (id, fetchData) => {
        fetchData(id)
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.warn(err);
            });
    };

    useEffect(() => {
        if(params && params.comicId){
            updateDate(params.comicId, getComic);
        }else if (params && params.characterId){
            updateDate(params.characterId, getCharacterDetail);
        }

    }, []);

    if (error)
        navigate(`/error/${error.code}`, {replace: true});


    const spinner = loading ? <Spinner/> : null;
    const content = (!loading && !error) ? <View data={data}/> : null;

    return (
        <>
            <Header/>
            <ComicsPreview/>
            <SwitchTransition>
                <Transition timeout={duration} in={true} key={loading} nodeRef={nodeRef}>
                    {status => {
                        return (
                            <div style={{...defaultStyles, ...transitionStyles[status]}} ref={nodeRef}>
                                {!loading ? content :
                                    <StyledHandleContainer>
                                        {spinner}
                                    </StyledHandleContainer>
                                }
                            </div>
                        );
                    }}
                </Transition>
            </SwitchTransition>

        </>
    );

    // eslint-disable-next-line react/prop-types
    function View({data: {title, name, thumbnail, price, description, pageCount, language}}) {
        return (
            <Container>
                <ComicContainer>
                    <Row>
                        <Col md={4}>
                            <ComicImage src={thumbnail || marvelImg || ''} alt='marvel image'/>
                        </Col>
                        <Col md={6}>
                            <div>
                                <Title $color={color.text.dark} $margin='0 0 30px 0'>
                                    {title || name}
                                </Title>
                                <Describe $size='18px' $margin='0 0 40px 0'>
                                    {description || 'No description available'}
                                </Describe>
                                <Describe $size='18px' $margin='0 0 30px 0'>
                                    {pageCount? `Page Count ${pageCount}` : null}
                                </Describe>
                                <Describe $size='18px' $margin='0 0 30px 0'>
                                    {language ? `Language ${language}` : null}
                                </Describe>
                            </div>
                            <Title $color={color.text.primary} $size='24px' $weight='700'>
                                {price? `Price ${price}` : null}
                            </Title>
                        </Col>
                    </Row>
                </ComicContainer>
            </Container>
        );
    }
}
