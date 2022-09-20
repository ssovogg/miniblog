import React from "react";
import { useRef } from "react";
import classes from "./ShowList.module.css";

const Back = (props) => (
  <div className={classes.back} onClick={props.onClick}></div>
);

const ShowList = ({ onCancle, item, user }) => {
  const fileRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const fileChange = () => {
    fileRef.current.click();
  };
  return (
    <>
      <form className={classes.edit_form} onSubmit={onSubmit}>
        <input type="date" value={item.date} readOnly/>
        <div className={classes.img}>
          <img src={item.image} alt="" />
        </div>
        <div className={classes.content}>
          <h2>{item.title}</h2>
          <pre>{item.text}</pre>
          {user && (
            <>
              <button type="submit" className={classes.submitBtn}>
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
      <Back onClick={onCancle} />
    </>
  );
};

export default ShowList;
