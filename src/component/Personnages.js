import "../styles/Card.css"
import { useState, useEffect } from "react";

const Default = {
	"name": "Loading",
	"height": "Loading",
	"mass": "Loading",
	"hair_color": "Loading",
	"skin_color": "Loading",
	"eye_color": "Loading",
	"birth_year": "Loading",
	"gender": "Loading",
	"homeworld": "Loading",
	"films": [],
	"species": [],
	"vehicles": [],
	"starships": [],
	"created": "...",
	"edited": "...",
	"url": "..."
}

export default function Personnages(){
    const [characters,setCharacters] = useState(Default);
    const [charId,setCharId] = useState(2); // Setting ID to 1 start it at 0 ? 
    const [url,setUrl] = useState(`https://swapi.dev/api/people/1`);
    const [max,setMax] = useState(0);
    // Global Content API Fetch
    useEffect(() => {
        fetch(`https://swapi.dev/api/people`).then((response) => response.json())
        .then(function(data){
        console.log(data);
        setMax(data.count);
    });
    },[]);
    // Individual Content API Fetch
    useEffect(() => {
        fetch(url).then((response) => response.json())
        .then(function(data){
        setCharacters(data);
    });
    });

    function nextChar(){
        setCharId(charId + 1);
        setUrl(`https://swapi.dev/api/people/${charId}`);
        console.log(url);
    }

    return (
        <article className ="card-style">
            <h2>Personnages</h2>
            <ul>
            {Object.keys(characters).map(x => <li>{x} : {characters[x]}</li>)}
            </ul>
            <button onClick={nextChar}>Next</button>
        </article>
    );
}
