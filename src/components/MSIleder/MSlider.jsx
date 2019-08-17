import React, { useState } from "react";

import classes from "./MSlider.module.scss";

function MSlider(props) {
  const [activeElement, SetActiveElement] = useState(0);
  const [previous, SetPreviousElement] = useState(0);
  const [duration, SetDurationElement] = useState(0);
  const [lastClick, SetlastClickTime] = useState(0);
  const [elements] = useState(props.elements);
  const [animationDuration] = useState(props.duration);

  function slideLeft() {
    if (+new Date() - 1000 * animationDuration < lastClick) return;

    let _activeElement = activeElement;

    if (--_activeElement === -1) {
      _activeElement = elements.length - 1;
    }

    SetPreviousElement(activeElement);
    SetDurationElement(0);
    SetActiveElement(_activeElement);
    SetlastClickTime(+new Date());
    if (typeof props.cb === "function")
      props.cb(elements.length, _activeElement + 1);
  }
  function slideRight() {
    if (+new Date() - 1000 * animationDuration < lastClick) return;
    let _activeElement = activeElement;
    if (++_activeElement === elements.length) {
      _activeElement = 0;
    }
    SetPreviousElement(activeElement);
    SetDurationElement(1);
    SetActiveElement(_activeElement);
    SetlastClickTime(+new Date());

    if (typeof props.cb === "function")
      props.cb(elements.length, _activeElement + 1);
  }

  if (process.env.NODE_ENV === 'test') {
      //for testing purposes, only in test environment
      global.dataForTesting = {
          activeElement
      };
  }

  return (
    <ul className={classes.MSlider}>
      <li onClick={slideLeft} className={classes.slideLeft} data-testid="slideLeftButton">
        {" "}
        {"<"}{" "}
      </li>
      {elements.map((elem, index) => {
        return (
          <li
            style={{ animationDuration: animationDuration + "s" }}
            className={
              classes.elements +
              " " +
              (index === activeElement
                ? duration === 0
                  ? classes.activeFromLeft
                  : classes.activeFromRight
                : index === previous
                ? duration === 0
                  ? classes.previousLeft
                  : classes.previousRight
                : classes.passive)
            }
            key={index}
          >
            <div className={classes.MImageContainer}>
              <img src={elem} alt="" />
            </div>
          </li>
        );
      })}

      <li onClick={slideRight} className={classes.slideRight} data-testid="slideRightButton">
        {" "}
        {">"}{" "}
      </li>
    </ul>
  );
}

export default MSlider;
