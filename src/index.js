import React from "react";
import ReactDom from "react-dom";

import "./index.css";
const characters = [
  {
    id: 1,
    img: "https://cdn.myanimelist.net/images/characters/14/412779.jpg",
    title: "Reze",
    author: "some Boy",
  },
  {
    id: 2,
    img: "https://twinfinite.net/wp-content/uploads/2022/11/Chainsaw-Man-Anime-Makima-Staring-down-at-Denji-Screenshot.jpg?fit=1200%2C675",
    title: "Makima is the best girl",
    author: "Tatsuki Fujimoto",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {characters.map((character) => {
        return <Book key={character.id} {...character}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  return (
    <article>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <p>{props.author}</p>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
