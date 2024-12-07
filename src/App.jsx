import theme from './style/theme.js';
import './style/bootstrap-reboot.min.css';
import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from 'styled-components';
import Header from './components/header/Header.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CharactersPage, ComicPage, ComicsPage, NotFoundPage} from './components/pages/index.js';



export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<CharactersPage/>}/>
                    <Route path={'/comics'} element={<ComicsPage/>}/>
                    <Route path='/comics/:comicId' element={<ComicPage/>}/>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                    <Route path={'/error/:code'} element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>

        </ThemeProvider>
    );
}




