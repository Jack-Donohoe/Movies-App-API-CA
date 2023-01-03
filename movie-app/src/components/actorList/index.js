import React from "react";
import Grid from "@mui/material/Grid";
import ActorCard from "../actorCard";

export default function ActorList(props) {

    let actorCards = props.actors.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <ActorCard key={m.id} actors={m} selectFavourite={props.selectFavourite} />
        </Grid>
    ));

  return (
    actorCards
  )
};