import React from "react";
import Meaning from "./Meaning";
export default function Results (props){

if (props.content) {
    return (
        <div>
    <h2> {props.content.word}</h2>
    {props.content.meanings.map(function(meaning,index){
     return (
        <div key={index}>
        <Meaning meaning={meaning} />
        </div>
        )


    } )}
        </div>
    )
} else {
    return null;
}

}