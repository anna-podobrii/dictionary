import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleRespons(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    alert(`Search ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleRespons);
  }

  function setKeywordFunc(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="text-center" onSubmit={search}>
        <input type="search" onChange={setKeywordFunc} />
      </form>
    </div>
  );
}
