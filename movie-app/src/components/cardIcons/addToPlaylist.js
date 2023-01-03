import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToMustWatch = (e) => {
      e.preventDefault();
      context.addToMustWatch(movie);
      console.log(context.mustWatch)
    };
  
    return (
      <IconButton aria-label="add to favorites" onClick={handleAddToMustWatch}>
        <PlaylistIcon color="primary" fontSize="large" />
      </IconButton>
    );
};

export default AddToPlaylistIcon;