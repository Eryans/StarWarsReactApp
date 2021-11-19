import { Link } from "react-router-dom";
import "../styles/Card.css"
import { useEffect, useState } from "react";

export default function Research(){
    
    const [data,setData] = useState("");
    const LINKS = ["/Personnages","/Planetes","/Films","/Especes","/Vehicules","/Vaisseaux"];

    useEffect(()=>{
        fetch("https://swapi.dev/api").then((response) =>
        response.json()).then(function(res){
            setData(res);
        },[]);
    });
    return(  
        <section className="card-style">
            <h2>Recherche par ID</h2>
            <ul>
            {Object.keys(data).map((x,i) => <li key={i}> <Link to={LINKS[i]}> {x} </Link> </li>)}
            </ul>
        </section>
    );
}