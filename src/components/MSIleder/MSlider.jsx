import React, { useState } from "react";

import classes from "./MSlider.module.scss";

function MSlider(props) {
  const [activeElement, SetActiveElement] = useState(0);
  const [previous, SetPreviousElement] = useState(0);
  const [duration, SetDurationElement] = useState(0);

  const [elements, changeElements] = useState(props.elements);
  // console.log(val)
  function slideLeft() {
    let _activeElement = activeElement;

    if (--_activeElement === -1) {
      _activeElement = elements.length - 1;
    }

    SetPreviousElement(activeElement);
    SetDurationElement(0);
    SetActiveElement(_activeElement);
  }
  function slideRight() {
    let _activeElement = activeElement;
    if (++_activeElement === elements.length) {
      _activeElement = 0;
    }
    SetPreviousElement(activeElement);
    SetDurationElement(1);
    SetActiveElement(_activeElement);
  }
  return (
    <ul className={classes.MSlider}>
      <li onClick={slideLeft} className={classes.slideLeft}>
        {" "}
        {"<"}{" "}
      </li>
      {elements.map((elem, index) => {
        return (
          <li
            className={
              index === activeElement
                ? duration === 0
                  ? classes.activeFromLeft
                  : classes.activeFromRight
                : index === previous
                ? duration === 0
                  ? classes.previousLeft
                  : classes.previousRight
                : classes.passive
            }
            key={index}
          >
            <img src={elem} alt="" />
          </li>
        );
      })}

      <li onClick={slideRight} className={classes.slideRight}>
        {" "}
        {">"}{" "}
      </li>
    </ul>
  );
}

export default MSlider;