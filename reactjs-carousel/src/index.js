import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>Imaage-1</Item>
          <Item>Imaage-2</Item>
          <Item>Imaage-3</Item>
          <Item>Imaage-4</Item>
          <Item>Imaage-5</Item>
          <Item>Imaage-6</Item>
          <Item>Imaage-7</Item>
          <Item>Imaage-8</Item>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
