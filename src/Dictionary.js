import React, { useState } from "react";
import axios from "axios";
import Result from "./Result"
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleRespons(response) {
    setResult(response.data[0])
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleRespons);

     let pexelsApiKey =
       "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
     let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
     let headers = { Authorization: `Bearer ${pexelsApiKey}` };
     axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function setKeywordFunc(event) {
    setKeyword(event.target.value);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  return (
    <div className="Dictionary">
      <form className="text-center" onSubmit={search}>
        <input type="search" onChange={setKeywordFunc} />
        <Result result={result} />
        <Photos photos={photos} />
      </form>
    </div>
  );
}
