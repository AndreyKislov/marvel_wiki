import theme from './style/theme.js';
import './style/bootstrap-reboot.min.css';
import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from 'styled-components';
import Header from './components/header/Header.jsx';
import ComicsPage from './components/comics-page/ComicsPage.jsx';


export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            {/*<CharactersPage/>*/}
            {/*<CharacterPage/>*/}
            <ComicsPage/>
            {/*<ComicPage/>*/}
        </ThemeProvider>
    );
}




