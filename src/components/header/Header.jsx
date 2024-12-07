import {styled, ThemeContext} from 'styled-components';
import {Col, Container, Row} from 'react-bootstrap';
import Title from '../titles/Title.jsx';
import {useContext} from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';


const StyledHeader = styled.header`
    margin: 45px 0 65px 0;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 28px;
    text-transform: none;
    font-weight: 700;

    &.active {
        color: ${({theme}) => theme.color.text.primary};
    }

    &:not(.active) {
        color: ${({theme}) => theme.color.text.dark};
    }
`;


const Nav = styled.nav`
    margin-left: 58px;
`;

const Ul = styled.ul`
    display: flex;
    gap: 10px;

    li {
        list-style: none;
    }
`;

export default function Header() {
    const {color} = useContext(ThemeContext);

    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Col md={6}>
                        <Link to={'/'}>
                            <Title $size='28px' $transform='none' $color={color.text.primary}>
                                Marvel <span className='span-dark'>information portal</span>
                            </Title>
                        </Link>
                    </Col>
                    <Col md={{span: 3, offset: 3}}>
                        <Nav>
                            <Ul>
                                <li>
                                    <StyledNavLink to="/">
                                        Character
                                    </StyledNavLink>
                                </li>
                                <li>
                                    <Title $size='30px' $color={color.text.dark}>/</Title>
                                </li>
                                <li>
                                    <StyledNavLink to="/comics">
                                        Comics
                                    </StyledNavLink>
                                </li>
                            </Ul>
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