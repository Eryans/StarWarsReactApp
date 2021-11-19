import "../../styles/Card.css"
import GetGlobalInfoCard from "../GetGlobalInfoCard";
import GetInfoCard from "../GetInfoCard";

export default function Personnages(props){
    return(
        (props.isID) ?
        <GetInfoCard URL="https://swapi.dev/api/people/" title="Personnage" form={true} ID={1}/>
        :
        <GetGlobalInfoCard URL="https://swapi.dev/api/people/" title="Personnages"/>
    );
}
