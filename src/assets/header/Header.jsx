import {styled} from 'styled-components';
import {Col, Container, Row} from 'react-bootstrap';
import Title from '../titles/Title.jsx';
import theme from '../../style/theme.js';

const Link = styled(Title)`
    cursor: pointer;
    text-decoration: none;
`;
const StyledHeader = styled.header`
    margin: 45px 0 65px 0;
`;
const Nav = styled.nav`
    margin-left: 58px;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Col md={6}>
                        <Title $size='28px' $transform='none' $color={theme.color.text.primary}>
                            Marvel <span className='span-dark'>information portal</span>
                        </Title>
                    </Col>
                    <Col md={{span: 3, offset: 3}}>
                        <Nav>
                            <Link as='a' href='#' $size='28px' $transform='none'
                                  $color={theme.color.text.primary}>Character</Link>
                            <Title $size='28px' $transform='none'
                                   $color={theme.color.text.dark}>&nbsp;/&nbsp;</Title>
                            <Link as='a' href='#' $size='28px' $transform='none' $color={theme.color.text.dark}>Comics</Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </StyledHeader>  
    );
}