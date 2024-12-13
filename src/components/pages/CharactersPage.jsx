import RandomCharacter from '../random-section/RandomCharacterSection.jsx';
import CharactersListSection from '../characters-list-section/CharactersListSection.jsx';
import Header from '../header/Header.jsx';
import {useState} from 'react';


export default function CharactersPage() {
const [characterName, setCharacterName] = useState('');


    return (
        <>
            <Header />
            <RandomCharacter setCharacterName={setCharacterName} />
            <CharactersListSection characterName={characterName} />
        </>
    );
}