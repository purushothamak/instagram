import React, { useState } from "react";
import SearchUser from "./SearchUser";
import SearchResults from "./SearchResults";
import InstaSideBar from "../Sidebar/InstaSideBar";

function Search() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <InstaSideBar />
      <SearchUser setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;
