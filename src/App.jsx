import theme from './style/theme.js';
import './style/bootstrap-reboot.min.css';
import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from 'styled-components';
import Header from './components/header/Header.jsx';
import CharactersPage from './components/pages/CharactersPage.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ComicsPage from './components/pages/ComicsPage.jsx';


export default function App() {
    return (
        <ThemeProvider theme={theme}>

            {/*<CharactersPage/>*/}
            {/*/!*<CharacterPage/>*!/*/}
            {/*/!*<ComicsPage/>*!/*/}
            {/*/!*<ComicPage/>*!/*/}
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<CharactersPage/>}/>
                    <Route path={'/comics'} element={<ComicsPage/>}/>
                </Routes>
            </BrowserRouter>

        </ThemeProvider>
    );
}




