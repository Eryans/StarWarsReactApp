import "../../styles/Card.css"
import GetInfoCard from "../GetInfoCard";

export default function Vehicules(){
return(
        <GetInfoCard URL="https://swapi.dev/api/vehicles/" title="Véhicules" form={true} ID={4}/>
    );
}
