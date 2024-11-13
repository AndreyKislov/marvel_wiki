import {styled, ThemeContext} from 'styled-components';
import {Col, Container, Row} from 'react-bootstrap';
import Title from '../titles/Title.jsx';
import {useContext} from 'react';
import PropTypes from 'prop-types';

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

export default function Header({active}) {
    const {color} = useContext(ThemeContext);
    const colors = chooseColors(active);

    function chooseColors(active) {
        const colors = {
            characters: color.text.dark,
            comics: color.text.dark,
        };
        if(active === 'comics'){
            colors.comics = color.text.primary;
        }else if(active === 'characters'){
            colors.characters = color.text.primary;
        }
        return colors;
    }
    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Col md={6}>
                        <Title $size='28px' $transform='none' $color={color.text.primary}>
                            Marvel <span className='span-dark'>information portal</span>
                        </Title>
                    </Col>
                    <Col md={{span: 3, offset: 3}}>
                        <Nav>
                            <Link to='/characters' as='a' $size='28px' $transform='none'
                                  $color={colors.characters}>Character</Link>
                            <Title $size='28px' $transform='none'
                                   $color={color.text.dark}>&nbsp;/&nbsp;</Title>
                            <Link to='/comics' as='a' $size='28px' $transform='none'
                                  $color={colors.comics}>Comics</Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </StyledHeader>  
    );
}

Header.propTypes = {
    active: PropTypes.string,
};