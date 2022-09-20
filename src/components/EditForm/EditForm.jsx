import React from "react";
import { useRef } from "react";
import classes from "./EditForm.module.css";

const EditForm = ({ onCancle, item, user }) => {
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
        <input type="date" value={item.date} />
        <div className={classes.img}>
          <button className={classes.fileBtn} onClick={fileChange}>
            사진 변경
          </button>
          <img src={item.image} alt={item.title} />
        </div>
        <input type="file" id="pic" ref={fileRef} />
        <div>
          <input type="text" id="title" placeholder="제목" value={item.title} />
          <textarea id="content" placeholder="본문" value={item.text} />
          <button type="submit" className={classes.submitBtn}>
            게시
          </button>
          <button onClick={onCancle} className={classes.cancleBtn}>
            취소
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
