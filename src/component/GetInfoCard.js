import { useState, useEffect } from "react";


export default function GetInfoCard(props){
    const DefaultMessage = "LOADING...";
    const regex = new RegExp(`^[0-9]*$`);
    const [data,setData] = useState("");
    const [itemID,setItemID] = useState(props.ID);
    const [url,setUrl] = useState(props.URL + `${itemID !== undefined ? itemID : ""}`);
    console.log(url);
    const [max,setMax] = useState(0);
    // Global Content API Fetch
     useEffect(() => {
        fetch(props.URL).then((response) => response.json())
        .then(function(data){
            console.log(data);
            setMax(data.count+1); // Adding 1 to max because API data is outdated
        });
    },[]); 
    // Individual Content API Fetch
    useEffect(() => {
        fetch(url).then((response) => response.json())
        .then(function(data){
            setData(data);
            });
        }
    ,[url]);

    function nextItem(){
        typeof itemID != "number" && setItemID(parseInt(itemID));
        (itemID > max) ? setItemID(1) : setItemID(itemID + 1);
        console.log(typeof itemID);
        setUrl(props.URL + `${parseInt(itemID)+1}`);
        console.log(url);
    }
    function prevItem(){
        (itemID < 1) ? setItemID(max) : setItemID(itemID - 1);
        setUrl(props.URL + `${parseInt(itemID)-1}`);
        console.log(url);
    }
    function handleChange(e){
        e.preventDefault();
        regex.test(e.target.value) && setItemID(e.target.value); 
        if (e.target.value){
            setUrl(props.URL + e.target.value);
        }
    }
    return (
        <article className ="card-style">
            <h2>{props.title}</h2>
            {
                (props.form) &&
                <form>
                    <input type="text" onInput={handleChange} onSubmit={handleChange} value={itemID}/>
                </form>
            }
            <ul>
            {(data) ? Object.keys(data).map((x,i) => <li key={i}>{x} : {data[x]}</li>) : <p>{DefaultMessage}</p>}
            </ul>

            <div>
            <button onClick={prevItem}>Prev</button>
            <button onClick={nextItem}>Next</button>
            </div>
        </article>
    );
}