import theme from './style/theme.js';
import './style/bootstrap-reboot.min.css';
import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {styled, ThemeProvider} from 'styled-components';
import {BrowserRouter, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {TransitionGroup, Transition, SwitchTransition} from 'react-transition-group';
import {lazy, Suspense} from 'react';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AnimatedRoutes/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

function AnimatedRoutes() {
    const CharactersPage = lazy(() => import('./components/pages/CharactersPage'));
    const SingleUnitPage = lazy(() => import('./components/pages/SingleUnitPage'));
    const ComicsPage = lazy(() => import('./components/pages/ComicsPage'));
    const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));


    const location = useLocation();
    const duration = 500;

    const defaultStyle = {
        transition: `opacity ${duration}ms `,
        opacity: 0,
    };

    const transitionStyles = {
        entering: {opacity: 1},
        entered: {opacity: 1},
        exiting: {opacity: 0},
        exited: {opacity: 0},
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
                            <Suspense>
                                <Routes location={location}>
                                    <Route path='/' element={<Navigate to="/characters" replace/>} />
                                    <Route path="/characters" element={<CharactersPage/>}/>
                                    <Route path="/characters/:characterId" element={<SingleUnitPage/>}/>
                                    <Route path="/comics" element={<ComicsPage/>}/>
                                    <Route path="/comics/:comicId" element={<SingleUnitPage/>}/>
                                    <Route path="*" element={<Navigate to='/error/404' replace/>}/>
                                    <Route path="/error/:code" element={<ErrorPage/>}/>
                                </Routes>
                            </Suspense>
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
