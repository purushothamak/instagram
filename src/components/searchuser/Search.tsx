import React, { useState } from "react";
import SearchUser from "./SearchUser";
import SearchResults from "./SearchResults";

function Search() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <SearchUser setResults={setResults} />
      <SearchResults results={results} result={""} />
    </div>
  );
}

export default Search;
