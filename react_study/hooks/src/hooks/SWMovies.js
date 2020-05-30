import React, { useState, useEffect } from "react";
import axios from "axios";
export default function SWMovies() {
  const [moviedId, setMoviedId] = useState(1);
  const [movieTitle, setMovieTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://swapi.dev/api/films/${moviedId}/`
      );
      setMovieTitle(response.data.title);
    }
    fetchData();
  }, [moviedId]);
  return (
    <div>
      <h1>Pick A movie</h1>
      <h4>You chose : {movieTitle}</h4>
      <select value={moviedId} onChange={(e) => setMoviedId(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
}
