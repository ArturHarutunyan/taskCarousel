import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import MSlider from "./components/MSIleder/MSlider";
var elements = [
  "https://www.armeniatravel.am/wcit/V.2.0/images/Amberd/Amberd_1.jpg",
  "https://www.armeniatravel.am/wcit/V.2.0/images/Sevan_Dilijan/Sevan.jpg",
  "https://www.armeniatravel.am/wcit/V.2.0/images/Amberd/Amberd_day_4.jpg",
  "https://www.armeniatravel.am/wcit/V.2.0/images/Amberd/Amberd_2.jpg",
  "https://www.armeniatravel.am/wcit/V.2.0/images/Sevan_Dilijan/Sevan_3.jpg",
  "https://www.armeniatravel.am/wcit/V.2.0/images/Sevan_Dilijan/Sevan_2.jpg",
  "https://www.armeniatravel.am/wcit/V.2.0/images/Sevan_Dilijan/Sevan_1.jpg",
  "https://www.armeniatravel.am/wcit/V.2.0/images/Sevan_Dilijan/Sevanavank.jpg"
];
function App() {
  return (
    <div className="App">
      <MSlider
        elements={elements}
        duration={2}
        cb={function(a, b) {
          console.log(a, b);
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
