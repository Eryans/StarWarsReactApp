import More from "../component/More";
import Acceuil from "../component/Acceuil";
import { Route,Routes} from "react-router";
import Personnages from "../component/Personnages";
export default function Main(){
    return(
         <main className="d-flex justify-content-center my-5">
                <Routes>
                    <Route path="/" element={<Acceuil />}/>
                    <Route path="/More" element={<More />}/>
                    <Route path="/Personnages" element={<Personnages />}/>
                </Routes>
        </main> 
    );
}