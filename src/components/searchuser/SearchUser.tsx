import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchUser.css";
import SearchResults from "./SearchResults";

const SearchUser = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (input) {
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter(
            (user: { [x: string]: string; name: string }) => {
              return (
                user &&
                user.name &&
                user.name.toLowerCase().includes(input.toLowerCase())
              );
            }
          );
          setSearchResults(results);
          setIsLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [input]);

  const handleChange = (value: React.SetStateAction<string>) => {
    setInput(value);
  };

  return (
    <div className="search-input">
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchIcon sx={{ color: "black", my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Search"
            variant="standard"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            sx={{ borderRadius: "1em", width: "18em" }}
          />
        </Box>
      </Box>
      {isLoading && <div>Loading...</div>}
      {!isLoading && input && searchResults.length === 0 && (
        <div>No results found</div>
      )}
      {!isLoading && input && searchResults.length > 0 && (
        <SearchResults results={searchResults} result={""} />
      )}
    </div>
  );
};

export default SearchUser;
