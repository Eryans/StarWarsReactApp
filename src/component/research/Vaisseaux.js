import "../../styles/Card.css"
import GetGlobalInfoCard from "../GetGlobalInfoCard";
import GetInfoCard from "../GetInfoCard";

export default function Vaisseaux(props){
    const url = "https://swapi.dev/api/starships/";
    return(
        (props.isID) ?
        <GetInfoCard URL={url} title="Vaisseau" form={true} ID={2}/>
        :
        <GetGlobalInfoCard URL={url} title="Vaisseaux"/>
    );
}
