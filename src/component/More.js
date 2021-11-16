import { Link } from "react-router-dom";
import { Routes,Route, Outlet } from "react-router";
import "../styles/Card.css"

export default function More(){
    return(
        <section className="card-style">
            <h2>Selectionner les données recherché
                <ul>
                    <li><Link to="/Personnages">Personnages</Link></li>
                    <li>Vaisseaux</li>
                    <li>Planètes</li>
                </ul>
            </h2>
        </section>
    );
}