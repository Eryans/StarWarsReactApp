import { Link } from "react-router-dom";
export default function More(){
    return(
        <section>
            <h2>Selectionner les données recherché
                <ul>
                    <li><Link to="/TestContent">Personnages</Link></li>
                    <li>Vaisseaux</li>
                    <li>Planètes</li>
                </ul>
            </h2>
        </section>
    );
}