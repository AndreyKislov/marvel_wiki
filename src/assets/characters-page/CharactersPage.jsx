
import Header from '../header/Header.jsx';

import RandomCharacter from '../random-section/RandomCharacterSection.jsx';
import CharactersListSection from '../characters-list-section/CharactersListSection.jsx';


export default function CharactersPage() {

    return (
        <>
            <Header active='characters'/>
            <RandomCharacter/>
            <CharactersListSection/>
        </>
    );
}