import React from "react";
import classes from "./BlogList.module.css";

const BlogList = ({item, user, showList}) => {
  const onClick = () => showList(item);
  return (
  <li className={classes.list} onClick={onClick}>
    <h2>{item.title}</h2>
    <span className={classes.date}>{item.date}</span>
    <img src={item.image} alt="item.title" />
    <div className={classes.button}>
    {user && (
      <>
        <button>
          <i className="fa-solid fa-pen"></i>
          <span>edit</span>
        </button>
        <button>
          <i className="fa-solid fa-eraser"></i>
          <span>delete</span>
        </button>
      </>
    )}
    </div>
  </li>
)};

export default BlogList;
