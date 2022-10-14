import React from "react";
import "./Dictionary.css";
import Meaning from "./Meaning"
import Phonetic from "./Phonetic";

export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>
        <h6>{props.result.phonetic}</h6>
        <p>
          <Phonetic phonetic={props.result.phonetics} />
        </p>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="test">
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
