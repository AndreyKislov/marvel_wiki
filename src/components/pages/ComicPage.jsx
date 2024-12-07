import {Col, Container, Row} from 'react-bootstrap';
import ComicsPreview from '../comics-preview/ComicsPreview.jsx';
import marvelImg from '../../img/default_marvel.jpg';
import Title from '../titles/Title.jsx';
import Describe from '../describes/Describe.jsx';
import styled, {ThemeContext} from 'styled-components';
import {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import useMarvelService from '../../services/useMarvelService.js';
import ErrorMessage from '../errorMessage/ErrorMessage.jsx';
import Spinner from '../spinners/Spinner.jsx';

const ComicContainer = styled.section`
    margin-bottom: 150px;
`;

const ComicImage = styled.img`
    width: 300px;
    height: 450px;
`;

const StyledHandleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 130px
`;

export default function ComicPage() {
    const {color} = useContext(ThemeContext);
    const {comicId} = useParams();
    const {loading, error, getComic} = useMarvelService();
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const updateDate = (id) => {
        getComic(id)
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.warn(err);
            });
    };

    useEffect(() => {
        updateDate(comicId);
    }, []);

    if(error)
        navigate(`/error/${error.code}`, {replace: true});


    const spinner = loading ? <Spinner/> : null;
    const content =  (!loading && !error) ? <View data={data}/> : null;

    return (
        <>
            <ComicsPreview/>
            <StyledHandleContainer>
                {spinner}
            </StyledHandleContainer>
            {content}
        </>
    );

    // eslint-disable-next-line react/prop-types
    function View({data: {title, image, price, description, pageCount, language}}) {
        return (
            <Container>
                <ComicContainer>
                    <Row>
                        <Col md={4}>
                            <ComicImage src={image || marvelImg || ''} alt='marvel image'/>
                        </Col>
                        <Col md={6}>
                            <div>
                                <Title $color={color.text.dark} $margin='0 0 30px 0'>
                                    {title}
                                </Title>
                                <Describe $size='18px' $margin='0 0 40px 0'>
                                    {description || 'No description available'}
                                </Describe>
                                <Describe $size='18px' $margin='0 0 30px 0'>
                                    Pages: {pageCount}
                                </Describe>
                                <Describe $size='18px' $margin='0 0 30px 0'>
                                    Language: {language}
                                </Describe>
                            </div>
                            <Title $color={color.text.primary} $size='24px' $weight='700'>
                                Price: {price}
                            </Title>
                        </Col>
                    </Row>
                </ComicContainer>
            </Container>
        );
    }
}
