import React,{useState} from "react";
import axios from "axios";
import Results from "./Results";
export default function Dictionary() {
let [Keyword, setKeyword] = useState("");
let [Content, setContent] = useState(null);
function handleSubmit(event){
    event.preventDefault();
   
}

function updateChange (event){
setKeyword(event.target.value);

function handleResponse(response){
    setContent(response.data[0]);}
    
//https://dictionaryapi.dev/
let url=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
axios.get(url).then(handleResponse);
}
    return (
    <div className="Dictionary">
    <form onSubmit={handleSubmit}> 
    <input type= "Search" onChange={updateChange}/>
    </form>
    <Results content={Content} />
    <p className= "Instructions"><em>Note: Enter word and press #, e.g "sunset#"</em>
     </p>
    </div>
);
    }
