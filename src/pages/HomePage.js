import React from "react";
import { EventList } from "../components/EventList";
import { useFetch } from "../components/useFetch";

export const HomePage = () => {
  const { error, data, isPending } = useFetch(
    "http://localhost:3000/dev/todos/"
  );

  return (
    <>
      <div className="mx-4 my-4 fluid-container">
        <h1 className=" p-4 ml-title l-spacing text-center text-dark mt-4">
          EVENTVENUE
        </h1>
        <div className="d-flex flex-wrap">
          {isPending && <div>Loading...</div>}
          {data && <EventList mockEvents={data} />}
        </div>
      </div>
    </>
  );
};
