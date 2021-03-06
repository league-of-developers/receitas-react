import React from "react";

const Recipe = ({ id, title, imageUrl, description, ingredients, preparo }) => (
  <div className="recipe">
    <div className="recipe--container">
      <figure>
        <div
          className="recipe--container-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </figure>
      <div className="recipe--info">
        <h1> {title}</h1>
        <div className="recipe--info--description">
          <p>{description}</p>
          <span>{ingredients}</span>
        </div>
      </div>
    </div>
    <div className="recipe--preparation">
      <h2>Preparação</h2>
      <p>{preparo}</p>
    </div>
  </div>
);

export { Recipe };
