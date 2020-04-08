import React from "react";

export default ({ gifs }) => (
  <div className="images-wrapper">
    {gifs.map(gif => (
      <img
        src={gif.media[0].gif.url}
        className="results_gif"
        key={gif.id}
        alt={gif.name}
      />
    ))}
  </div>
);
