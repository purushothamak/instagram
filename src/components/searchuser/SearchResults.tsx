import React, { ReactNode } from "react";
import "./SearchUser.css";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";

interface SearchResultProps {
  email: ReactNode;
  name: any;
  result: string;
  results: string[];
  avatar: string;
}

const SearchResults: React.FC<{ results: SearchResultProps[] }> = ({
  results,
}) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {results.map((result, id) => (
        <React.Fragment key={id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={`${result.name}`} src={result.avatar} />
            </ListItemAvatar>
            <ListItemText primary={result.name} secondary={result.email} />
          </ListItem>
          {id < results.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default SearchResults;
