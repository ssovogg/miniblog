import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Emotion from "../Emotion/Emotion";
import classes from "./AddForm.module.css";

const Back = (props) => (
  <div className={classes.back} onClick={props.onClick}></div>
);

const AddForm = ({ onCancle, addContent }) => {
  const [img, setImg] = useState(null);
  const [emotion, setEmotion] = useState('');
  const formRef = useRef();
  const dateRef = useRef();
  const fileRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const selectEmotion = (emotion) => setEmotion(emotion);
  const onSubmit = (e) => {
    e.preventDefault();
    const contents = {
      id: Date.now(),
      date: dateRef.current.value,
      title: titleRef.current.value,
      text: textRef.current.value,
      emotion: emotion,
      image: img,
    } 
    addContent(contents);
    formRef.current.reset();
    setImg(null);
  };
  const fileChangeClick = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };
  const onChangeFileInput = (e) => {
    const imgFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = (event) => {
      setImg(event.target.result);
    };
    console.log(reader);
  }
  
  return (
    <>
      <form className={classes.edit_form} onSubmit={onSubmit} ref={formRef}>
        <input type="date" ref={dateRef} />
        <div className={classes.img}>
          <button className={classes.fileBtn} onClick={fileChangeClick}>
            사진 추가
          </button>
          <img src={img} alt={img} />
        </div>
        <input type="file" id="pic" ref={fileRef} onChange={onChangeFileInput}/>
        <Emotion name="add" onClick={selectEmotion}/>
        <div>
          <input type="text" id="title" placeholder="제목" ref={titleRef}/>
          <textarea id="content" placeholder="본문" ref={textRef}/>
          <button type="submit" className={classes.submitBtn}>
            <i className="fa-solid fa-pen"></i>
            <span>Save</span>
          </button>
          <button onClick={onCancle} className={classes.cancleBtn}>
            <span>cancle</span>
          </button>
        </div>
      </form>
      <Back onClick={onCancle} />
    </>
  );
};

export default AddForm;
