import "../../styles/Card.css"
import GetGlobalInfoCard from "../GetGlobalInfoCard";
import GetInfoCard from "../GetInfoCard";

export default function Especes(props){
    const url ="https://swapi.dev/api/species/";
    return(
        (props.isID) ?
        <GetInfoCard URL={url} title="Espèce" form={true} ID={1}/>
        :
        <GetGlobalInfoCard URL={url} title="Espèces"/>    
    );
}
