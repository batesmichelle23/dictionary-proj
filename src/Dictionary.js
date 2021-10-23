import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);

    }

    function handleResponse(response) {
        setResults(response.data[0]);
    }
        
    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f9170000100000105924ec22d264708b70583d328447621";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization : `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search"
                    autoFocus={true}
                    onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    )
}