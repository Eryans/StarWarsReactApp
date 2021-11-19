import "../../styles/Card.css"
import GetGlobalInfoCard from "../GetGlobalInfoCard";
import GetInfoCard from "../GetInfoCard";

export default function Films(props){
    const url = "https://swapi.dev/api/films/";
    return(
        (props.isID) ?
        <GetInfoCard URL={url} title="Film" form={true} ID={1}/>
        :
        <GetGlobalInfoCard URL={url} title= "Films"/>
    );
}
