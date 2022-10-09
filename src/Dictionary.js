import React, { useState } from "react";
import axios from "axios";
import Result from "./Result"
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleRespons(response) {
    setResult(response.data[0])
  }

  function search(event) {
    event.preventDefault();
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
        <Result result={result} />
      </form>
    </div>
  );
}
