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
    const [wrongInput,setwrongInput] = useState(false);
    const regex = new RegExp(`^[0-9]*$`);
    const [characters,setCharacters] = useState(Default);
    const [charId,setCharId] = useState(1);
    const [url,setUrl] = useState(`https://swapi.dev/api/people/${charId}`);
    const [max,setMax] = useState(0);
    // Global Content API Fetch
    useEffect(() => {
        fetch(`https://swapi.dev/api/people`).then((response) => response.json())
        .then(function(data){
            console.log(data);
            setMax(data.count+1); // Adding 1 to max because API data is outdated
        });
    },[]);
    // Individual Content API Fetch
    useEffect(() => {
        fetch(url).then((response) => response.json())
        .then(function(data){
            setCharacters(data);
            });
        }
    ,[url]);

    function nextChar(){
        (charId > max) ? setCharId(1) : setCharId(charId + 1);
        setUrl(`https://swapi.dev/api/people/${charId+1}`);
        console.log(url);
    }
    function prevChar(){
        (charId < 1) ? setCharId(max+1) : setCharId(charId - 1);
        setUrl(`https://swapi.dev/api/people/${charId-1}`);
        console.log(url);
    }
    function handleChange(e){
        setCharId(e.target.value);
        console.log(charId);
    }
    function handleSubmit(e){
        e.preventDefault();
        charId > max && setCharId(max);
        charId < 1 && setCharId(1);
        (charId && regex.test(charId)) ? setUrl(`https://swapi.dev/api/people/${charId}`,setwrongInput(false)): setwrongInput(true);
    }
    return (
        <article className ="card-style">
            <h2>Personnages </h2>
            <form>
                <input type="text" pattern="\d" onChange={handleChange} value={charId}/>
                {(wrongInput) && <p>Numbers only</p>}
                <input type="submit" onClick={handleSubmit} value="Change"/>
            </form>
            <ul>
            {Object.keys(characters).map((x,i) => <li key={i}>{x} : {characters[x]}</li>)}
            </ul>
            <button onClick={prevChar}>Prev</button>
            <button onClick={nextChar}>Next</button>
        </article>
    );
}
