import { Link } from "react-router-dom";
import "../styles/Card.css"
import { useEffect, useState } from "react";

export default function Research(){
    
    const [data,setData] = useState("");
    const [Msg,setMsg] = useState("Chargement...");
    const LINKS = ["/Personnages","/Planetes","/Films","/Especes","/Vehicules","/Vaisseaux"];

    useEffect(()=>{
        fetch("https://swapi.dev/api").then((response) =>
        response.json()).then(function(res){
            setData(res);
        }).catch(function(error){
            setMsg(() => "Somethigng went wrong : " + error)
        });
    },[]);
    return(  
        <section className="card-style">
            <h2>Recherche par ID</h2>
            {!data && <p>{Msg}</p>}
            <ul>
            {Object.keys(data).map((x,i) => <li key={i}> <Link to={LINKS[i]+"ID"}> {x} </Link> </li>)}
            </ul>
        </section>
    );
}