import "../../styles/Card.css"
import GetInfoCard from "../GetInfoCard";

export default function Personnages(){
    return(
        <GetInfoCard URL="https://swapi.dev/api/people/" title="Personnages" form={true} ID={1}/>
    );
}
