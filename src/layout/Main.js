import Acceuil from "../component/Acceuil";
import { Route,Routes} from "react-router";
import Personnages from "../component/research/Personnages";
import Planetes from "../component/research/Planetes";
import Films from "../component/research/Films";
import Especes from "../component/research/Especes";
import Vehicules from "../component/research/Vehicules";
import Vaisseaux from "../component/research/Vaisseaux";
import Research from "../component/Research";
import Content from "../component/Content";

export default function Main(){
    return(
         <main className="d-flex justify-content-center my-5">
                <Routes>
                    <Route path="/" element={<Acceuil />}/>
                    {/*--------------------------------- Research by ID part ---------------------------------*/}
                    <Route path="/Recherche" element={<Research />}/>
                    <Route path="/PersonnagesID" element={<Personnages isID={true}/>}/>
                    <Route path="/PlanetesID" element={<Planetes />}/>
                    <Route path="/FilmsID" element={<Films />}/>
                    <Route path="/EspecesID" element={<Especes />}/>
                    <Route path="/VehiculesID" element={<Vehicules />}/>
                    <Route path="/VaisseauxID" element={<Vaisseaux />}/>
                    {/*--------------------------------- Research by ID part ---------------------------------*/}
                    <Route path="/Contenu" element={<Content />}/>
                    <Route path="/Personnages" element={<Personnages isID={false}/>}/>
                    <Route path="/Planetes" element={<Planetes />}/>
                    <Route path="/Films" element={<Films />}/>
                    <Route path="/Especes" element={<Especes />}/>
                    <Route path="/Vehicules" element={<Vehicules />}/>
                    <Route path="/Vaisseaux" element={<Vaisseaux />}/>
                </Routes>
        </main> 
    );
}