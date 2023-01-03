import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Avatar from '@mui/material/Avatar';
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import img from '../../images/film-poster-placeholder.png'
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export default function ActorCard(props) {
    
    const actors = props.actors;

    const handleAddToFavourite = (e) => {
        e.preventDefault();
        props.selectFavourite(actors.id);
    };

  return (
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
      avatar={
        actors.favourite ? (
          <Avatar sx={{ backgroundColor: 'blue' }}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
        title={
          <Typography variant="h5" component="p">
            {actors.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actors.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
            : img
        }
      />
      <CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favourites" onClick={handleAddToFavourite}>
        <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
        <Link to={`/actors/${actors.id}`}>
        <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
      </CardContent>
    </Card>
  );
}