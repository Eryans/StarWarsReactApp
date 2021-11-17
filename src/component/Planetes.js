import "../styles/Card.css"
import GetInfoCard from "./GetInfoCard";

export default function Planetes(){
    return(
        <GetInfoCard URL="https://swapi.dev/api/planets/" title="Planètes" form={true} ID={1}/>
    );
}
