import theme from './style/theme.js';
import './style/bootstrap-reboot.min.css';
import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from 'styled-components';
import CharactersPage from './assets/characters-page/CharactersPage.jsx';


export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CharactersPage/>
            {/*<CharacterPage/>*/}
            {/*<ComicsPage/>*/}
            {/*<ComicPage/>*/}
        </ThemeProvider>
    );
}




