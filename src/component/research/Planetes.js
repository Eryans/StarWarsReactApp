import "../../styles/Card.css"
import GetGlobalInfoCard from "../GetGlobalInfoCard";
import GetInfoCard from "../GetInfoCard";

export default function Planetes(props){
    const url = "https://swapi.dev/api/planets/";
    return(
        (props.isID) ?
        <GetInfoCard URL={url} title="Planète" form={true} ID={1}/>
        :
        <GetGlobalInfoCard URL={url} title="Planètes"/>
    );
}
