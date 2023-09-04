import React from "react";
import "./SearchUser.css";

interface SearchResultProps {
  result: string;
  results: string[];
}

const SearchResults: React.FC<SearchResultProps> = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} results={[]} />;
      })}
    </div>
  );
};

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return <div className="search-result">{result}</div>;
};

export default SearchResults;
