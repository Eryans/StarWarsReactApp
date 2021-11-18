import "../../styles/Card.css"
import GetInfoCard from "../GetInfoCard";

export default function Especes(){
    return(
        <GetInfoCard URL="https://swapi.dev/api/species/" title="Espèces" form={true} ID={1}/>
    );
}
