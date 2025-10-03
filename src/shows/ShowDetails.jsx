import { useState } from "react";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();
  if (!show)
    return (
      <div className="show-details">
        <h2>Show Details</h2>
        <p>Select a show to learn more</p>
      </div>
    );
  return (
    <div className="show-details">
      <section className="episodes">
        <h2>{show.name}</h2>
        <ol>
          {show.episodes.map((episode) => (
            <li key={episode.title} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ol>
      </section>
      <section className="episode-details">
        {!selectedEpisode ? (
          <>
            <h2>Episode Details</h2>
            <p>Select an episode to learn more</p>
          </>
        ) : (
          <>
            <h2>{`Episode ${selectedEpisode.number}`}</h2>
            <h3>{selectedEpisode.title}</h3>
            <p>{selectedEpisode.description}</p>
            <button>Watch Now</button>
          </>
        )}
      </section>
    </div>
  );
}
