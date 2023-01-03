import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
import { getActorDetails } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorPage = (props) => {
  const { id } = useParams();

  const { data: actors, error, isLoading, isError } = useQuery(
    ["actors", { id: id }],
    getActorDetails
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actors ? (
        <>
          <PageTemplate actors={actors}>
            <ActorDetails actors={actors} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorPage;