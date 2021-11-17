import "../styles/Card.css"
import GetInfoCard from "./GetInfoCard";

export default function Planetes(){
    return(
        <GetInfoCard URL="https://swapi.dev/api/planet/" title="Personnages" form={true} ID={1}/>
    );
}
