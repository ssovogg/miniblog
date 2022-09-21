import React, { useState } from "react";
import { useRef } from "react";
import EditForm from "../EditForm/EditForm";
import classes from "./ShowList.module.css";

const Back = (props) => (
  <div className={classes.back} onClick={props.onClick}></div>
);

const ShowList = ({ onCancle, item, user }) => {
  const [contents, setContents] = useState(item);
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    console.log(contents);
  };

  return (
    <>
      {editMode ? (
        <EditForm item={contents} user={user} onCancle={toggleEditMode} />
      ) : (
        <form className={classes.edit_form}>
          <input type="date" value={item.date} readOnly />
          <div className={classes.img}>
            <img src={item.image} alt="" />
          </div>
          <div className={classes.content}>
            <h2>{item.title}</h2>
            <pre>{item.text}</pre>
            {user && (
              <>
                <button
                  type="submit"
                  className={classes.submitBtn}
                  onClick={toggleEditMode}
                >
                  <i className="fa-solid fa-pen"></i>
                  <span>edit</span>
                </button>
                <button className={classes.deleteBtn}>
                  <i className="fa-solid fa-eraser"></i>
                  <span>delete</span>
                </button>
              </>
            )}
          </div>
        </form>
      )}
      <Back onClick={onCancle} />
    </>
  );
};

export default ShowList;
