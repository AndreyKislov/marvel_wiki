

import RandomCharacter from '../random-section/RandomCharacterSection.jsx';
import CharactersListSection from '../characters-list-section/CharactersListSection.jsx';
import Header from "../header/Header.jsx";


export default function CharactersPage() {

    return (
        <>
            <Header />
            <RandomCharacter/>
            <CharactersListSection/>
        </>
    );
}