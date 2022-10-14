import React from "react";
import "./Dictionary.css";

export default function Synonims(props) {
    if (props.synonim.length > 0) {
      return (
        <div className="Synonims">
              <strong>Synonims:{" "}</strong>
          {props.synonim.map(function (synonim, index) {
            return (
              <span key={index} className="synonim">
                <span className="synonimItem">{synonim}</span>
                <span> </span>
              </span>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
}
