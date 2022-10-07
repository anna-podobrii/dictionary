import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Search ${keyword}`);
  }

    function setKeywordFunc(event) {
        setKeyword(event.target.value)
        console.log(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="text-center" onSubmit={search}>
        <input type="search" onChange={setKeywordFunc} />
      </form>
    </div>
  );
}
