import theme from './style/theme.js';
import './style/bootstrap-reboot.min.css';
import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled, ThemeProvider } from 'styled-components';
import Header from './components/header/Header.jsx';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import {TransitionGroup, Transition, SwitchTransition} from 'react-transition-group';
import {CharactersPage, ComicPage, ComicsPage, NotFoundPage} from './components/pages/index.js';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AnimatedRoutes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

function AnimatedRoutes() {
    const location = useLocation();
    const duration = 500;

    // Стили для анимации
    const defaultStyle = {
        transition: `opacity ${duration}ms `,
        opacity: 0,
    };

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    return (
        <TransitionGroup>
            <SwitchTransition>
                <Transition key={location.key} timeout={duration}>
                    {(state) => (
                        <PageWrapper
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                            }}
                        >
                            <Routes location={location}>
                                <Route path="/" element={<CharactersPage />} />
                                <Route path="/comics" element={<ComicsPage />} />
                                <Route path="/comics/:comicId" element={<ComicPage />} />
                                <Route path="*" element={<NotFoundPage />} />
                                <Route path="/error/:code" element={<NotFoundPage />} />
                            </Routes>
                        </PageWrapper>
                    )}
                </Transition>
            </SwitchTransition>
        </TransitionGroup>
    );
}

const PageWrapper = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
`;
