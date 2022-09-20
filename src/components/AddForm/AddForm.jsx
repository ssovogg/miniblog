import React from "react";
import { useRef } from "react";
import classes from "./AddForm.module.css";

const AddForm = ({ onCancle }) => {
  const fileRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const fileChange = () => {
    fileRef.current.click();
  };
  return (
    <form className={classes.edit_form} onSubmit={onSubmit}>
      <input type="date" />
      <div className={classes.img}>
        <button className={classes.fileBtn} onClick={fileChange}>
          사진 추가
        </button>
        <img src="" alt="" />
      </div>
      <input type="file" id="pic" ref={fileRef} />
      <div>
        <input type="text" id="title" placeholder="제목" />
        <textarea id="content" placeholder="본문" />
        <button type="submit" className={classes.submitBtn}>
          게시
        </button>
        <button onClick={onCancle} className={classes.cancleBtn}>
          취소
        </button>
      </div>
    </form>
  );
};

export default AddForm;
