import React from "react";
import "./Article.css";

function Article({ title, image, summary, url, closeCard }) {
  return (
    <div className="card">
      <div className="container">
        <div className="closeButtonContainer">
          <button className="closeButton" onClick={() => closeCard(false)}>
            X
          </button>
        </div>
        <div className="title">{title}</div>
        <img src={image} className="image" alt="2" />
        <div className="summary">{summary}</div>
        <div className="goToButtonContainer">
          <a href={url} target="_blank">
            <button className="goToButton">Go to Article</button>
          </a>
        </div>
        <div className="backgroundBlur"></div>
      </div>
    </div>
  );
}

export default Article;
