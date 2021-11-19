import { useEffect, useState } from "react"

export default function GetGlobalInfoCard(props){
    const [url,setUrl] = useState(props.URL)
    const [itemsData,setItemsData] = useState([]);
    useEffect(() => {
        fetch(url).then((response) => response.json())
        .then(function(data){
            setItemsData(data.results)
        })
    },[url])
    return (
        <article>
            <h2>{props.title}</h2>
            <ul>
                {
                   (itemsData) ? itemsData.map((x) => Object.keys(x).map((y,i) => <li key={i}>{y} : {x[y]}</li>)) : <p> Loading...</p>
                }
            </ul>
        </article>    
    );
}