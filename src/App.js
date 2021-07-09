import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card.js";
import Axios from "axios";
import Icon from "./rocketIcon.png";

function App() {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    Axios.get("https://www.spaceflightnewsapi.net/api/v2/articles").then(
      (response) => {
        setArticlesList(response.data);
        console.log(response.data);
      }
    );
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img src={Icon} className="icon" alt="2" />
        <h1 className="headTitle">Space News</h1>
      </div>

      <div className="newsContainer">
        {articlesList.map((value, key) => {
          return (
            <div key={key}>
              <Card
                title={value.title}
                image={value.imageUrl}
                summary={value.summary}
                url={value.url}
              />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
