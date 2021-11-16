import More from "../component/More";
import Acceuil from "../component/Acceuil";
import TestContent from "../component/TestContent";
import { Route,Routes} from "react-router";
export default function Main(){
    return(
         <main>
                <Routes>
                    <Route exact path="/" element={<Acceuil />}/>
                    <Route path="/More" element={<More />}/>
                    <Route path="/TestContent" element={<TestContent />}/>
                </Routes>
        </main> 
    );
}