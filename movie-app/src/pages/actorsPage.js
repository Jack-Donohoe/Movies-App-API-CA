import React from "react";
import PageTemplate from "../components/templateActorList";
import Spinner from '../components/spinner'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { useQuery } from 'react-query'
import { getActors } from '../api/tmdb-api'

export default function Actors(props) {

    const {data, error, isLoading, isError}  = useQuery('actors', getActors)

    if (isLoading){
       return <Spinner/>
    }
    if (isError) {
      return <h1>{error.message}</h1>
    }
      const actors = data.results;


  // Redundant, but necessary to avoid app crashing.
  const favourites = actors.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (actorsId) => true 

  return (
    <PageTemplate
        title="Actors"
        actors={actors}
        action={(actors) => {
          return <AddToFavouritesIcon actors={actors} />
        }}
      />
    );
};