import React, { useState } from "react";
import "./Card.css";
import Article from "./Article.js";

function Card({ title, image, summary, url }) {
  const [openCard, setOpenCard] = useState(false);
  return (
    <div className="mainCard">
      <img src={image} className="image" alt="2" />
      <h1 className="title">{title}</h1>
      <button
        className="button"
        onClick={() => {
          setOpenCard(true);
        }}
      >
        See More
      </button>
      {openCard && (
        <Article
          title={title}
          image={image}
          summary={summary}
          url={url}
          closeCard={setOpenCard}
        />
      )}
    </div>
  );
}

export default Card;
