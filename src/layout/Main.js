import More from "../component/More";
import Acceuil from "../component/Acceuil";
import { Route,Routes} from "react-router";
import Personnages from "../component/Personnages";
import Planetes from "../component/Planetes";
import Films from "../component/Films";
import Especes from "../component/Especes";
import Vehicules from "../component/Vehicules";
import Vaisseaux from "../component/Vaisseaux";

export default function Main(){
    return(
         <main className="d-flex justify-content-center my-5">
                <Routes>
                    <Route path="/" element={<Acceuil />}/>
                    <Route path="/More" element={<More />}/>
                    <Route path="/Personnages" element={<Personnages />}/>
                    <Route path="/Planetes" element={<Planetes />}/>
                    <Route path="/Films" element={<Films />}/>
                    <Route path="/Especes" element={<Especes />}/>
                    <Route path="/Vehicules" element={<Vehicules />}/>
                    <Route path="/Vaisseaux" element={<Vaisseaux />}/>
                </Routes>
        </main> 
    );
}