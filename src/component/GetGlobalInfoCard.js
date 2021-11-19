import { useEffect, useState } from "react"

export default function GetGlobalInfoCard(props){
    const [isLoaded,setIsLoaded] = useState(false);
    const [url,setUrl] = useState(props.URL)
    const [itemsData,setItemsData] = useState([]);
    const [nxtPage,setNxtPage] = useState("");
    const [prvPage,setPrvPage] = useState("");
    useEffect(() => {
        fetch(url).then((response) => response.json())
        .then(function(data){
            console.log(data);
            setItemsData(data.results);
            setNxtPage(data.next);
            setPrvPage(data.previous)
            setIsLoaded(true);
            console.log(nxtPage);
            console.log(prvPage);
        })
    },[url,nxtPage,prvPage])
    return (
        <article className="card-style">
            <h2>{props.title}</h2>
            {
                (!isLoaded) && <p>...Loading...</p>
            }
                {
                   (itemsData) && itemsData.map((x) => <ul>{(Object.keys(x).map((y,i) => <li key={i}><b>{y}</b> : {x[y]} </li>))}</ul>)
                }
            {
            prvPage ?
                <button className="btn btn-light" onClick={() => setUrl(prvPage)}> Page Précédente</button>
                :
                <button className="btn btn-light" disabled> Page Précédente</button>   
            }
            {
            nxtPage ?
                <button className="btn btn-light" onClick={() => setUrl(nxtPage)}> Page Suivante</button>
                :
                <button className="btn btn-light" disabled> Page Suivante</button>
            }
        </article>
    );
}