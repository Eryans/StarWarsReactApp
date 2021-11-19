import "../../styles/Card.css"
import GetGlobalInfoCard from "../GetGlobalInfoCard";
import GetInfoCard from "../GetInfoCard";

export default function Vehicules(props){
    const url= "https://swapi.dev/api/vehicles/";
    return(
        (props.isID) ?
        <GetInfoCard URL={url} title="Véhicule" form={true} ID={4}/>
        :
        <GetGlobalInfoCard URL={url} title={"Véhicules"} />
    );
}
