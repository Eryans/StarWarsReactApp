import "../styles/Card.css"
import GetInfoCard from "./GetInfoCard";

export default function Films(){
    return(
        <GetInfoCard URL="https://swapi.dev/api/films/" title="Films" form={true} ID={1}/>
    );
}
