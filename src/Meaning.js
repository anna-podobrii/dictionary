import React from "react";
import "./Dictionary.css";
import Synonims from "./Synonims"
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <span>
                <strong>Meaning: </strong>
              </span>
              <span>{definition.definition}</span>
            </div>
            <em>
              <Examples example={definition.example} />
            </em>
          </div>
        );
      })}
      <Synonims synonim={props.meaning.synonyms} />
    </div>
  );
}
