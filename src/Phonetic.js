import React from "react";
import "./Dictionary.css";

export default function Phonetic(props) {
  if (props.phonetic.length > 0) {
    return (
      <div className="Phonetic">
        {props.phonetic.map(function (phonetic, index) {
          return (
            <div key={index}>
              <span>
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                  {" "}
                  Listen{" "}
                </a>
              </span>
              <span>{phonetic.text}</span>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
