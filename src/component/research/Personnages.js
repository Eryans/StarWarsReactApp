import "../../styles/Card.css"
import GetGlobalInfoCard from "../GetGlobalInfoCard";
import GetInfoCard from "../GetInfoCard";

export default function Personnages(props){
    const url = "https://swapi.dev/api/people/";
    return(
        (props.isID) ?
        <GetInfoCard URL={url} title="Personnage" form={true} ID={1}/>
        :
        <GetGlobalInfoCard URL={url} title="Personnages"/>
    );
}
