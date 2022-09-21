import React from "react";
import classes from "./BlogList.module.css";

const BlogList = ({ item, user, showList }) => {
  const onClick = () => {
    showList(item);
  };
  return (
    <li className={classes.list} onClick={onClick}>
      <img src={item.image} alt="item.title" />
      <div className={classes.emotion}>
        <i className={`fa-solid ${item.emotion}`}></i>
      </div>
      <div className={classes.content}>
        <h2>{item.title}</h2>
        <span className={classes.date}>{item.date}</span>
        <div className={classes.button}></div>
      </div>
    </li>
  );
};

export default BlogList;
