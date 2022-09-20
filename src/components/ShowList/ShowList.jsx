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
        <EditForm item={contents} />
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
                  수정
                </button>
                <button className={classes.deleteBtn}>삭제</button>
              </>
            )}
            <button onClick={onCancle} className={classes.cancleBtn}>
              X
            </button>
          </div>
        </form>
      )}
      <Back onClick={onCancle} />
    </>
  );
};

export default ShowList;
