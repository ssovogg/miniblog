import React from "react";
import classes from './Emotion.module.css';

const Emotion = ({name, onClick}) => {
  const selectEmotion = (e) => {
    if(e.target.id === ''){
      return;
    }
    onClick(e.target.id);
  }
  return (
  <ul className={classes.emotion} onClick={selectEmotion}>
    <li>
      <input type="radio" name={name} id="fa-face-laugh-beam" />
      <label htmlFor="fa-face-laugh-beam">
        <i class="fa-solid fa-face-laugh-beam"></i>
      </label>
    </li>
    <li>
      <input type="radio" name={name} id="fa-face-smile" />
      <label htmlFor="fa-face-smile">
        <i class="fa-solid fa-face-smile"></i>
      </label>
    </li>
    <li>
      <input type="radio" name={name} id="fa-face-meh" />
      <label htmlFor="fa-face-meh">
        <i class="fa-solid fa-face-meh"></i>
      </label>
    </li>
    <li>
      <input type="radio" name={name} id="fa-face-frown" />
      <label htmlFor="fa-face-frown">
        <i class="fa-solid fa-face-frown"></i>
      </label>
    </li>
    <li>
      <input type="radio" name={name} id="fa-face-sad-tear" />
      <label htmlFor="fa-face-sad-tear">
        <i class="fa-solid fa-face-sad-tear"></i>
      </label>
    </li>
  </ul>
)};

export default Emotion;
