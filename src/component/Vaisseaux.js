import "../styles/Card.css"
import GetInfoCard from "./GetInfoCard";

export default function Vaisseaux(){
    return(
        <GetInfoCard URL="https://swapi.dev/api/starships/" title="Vaisseaux" form={true} ID={2}/>
    );
}
