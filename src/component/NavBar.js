import React from "react";
import {
  Link
} from "react-router-dom";

export default function NavBar(){
    return (
        <div>
            <nav class="bg-light text-black">
                <ul className="container-fluid d-flex gap-3 py-2 m-0">
                    <li className="d-inline"><Link to="/">Acceuil</Link></li>
                    <li className="d-inline"><Link to="/Contenu">Contenu</Link></li>
                    <li className="d-inline"><Link to="/Recherche">Recherches</Link></li>
                </ul>
            </nav>
        </div>
    );
}