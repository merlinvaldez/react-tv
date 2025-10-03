import { useState } from "react";
import ShowSelection from "./shows/ShowSelection";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [selectedShow, setSelectedShow] = useState();
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          tvShows={tvShows}
          setSelectedShow={setSelectedShow}
        ></ShowSelection>
      </header>
      <main>
        <ShowDetails show={selectedShow}></ShowDetails>
      </main>
    </>
  );
}
