import React from "react";
import { useState } from "react";
import AddForm from "../../components/AddForm/AddForm";
import ShowList from "../../components/ShowList/ShowList";
import BlogList from "../../components/BlogList/BlogList";
import classes from "./Blog.module.css";
import Emotion from "../../components/Emotion/Emotion";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

const DUMMY = [
  {
    id: "d1",
    date: "2022-09-20",
    title: "호랑이",
    text: "first text",
    emotion: "fa-face-laugh-beam",
    image:
      "https://i.pinimg.com/564x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
  },
  {
    id: "d2",
    date: "2022-09-18",
    title: "사람",
    text: "fa-face-smile",
    emotion: "fa-face-meh",
    image:
      "https://i.pinimg.com/564x/b2/db/0a/b2db0ac7ddfe97fb862f02bdad38c3ee.jpg",
  },
  {
    id: "d3",
    date: "2022-08-20",
    title: "고양이",
    text: "first text",
    emotion: "fa-face-frown",
    image:
      "https://i.pinimg.com/564x/2d/ff/78/2dff7853ce5f405a87442bb8d3929369.jpg",
  },
];

const Blog = ({ db }) => {
  const user = true;
  const [contentList, setContentList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [showMode, setShowMode] = useState(false);
  const [blogObj, setBlogObj] = useState({});
  const toggleEditMode = () => setEditMode((prev) => !prev);
  const toggleShowMode = (item) => {
    setShowMode((prev) => !prev);
    setBlogObj(item);
  };
  const addContent = async (content) => {
    await addDoc(collection(db, "blog"), {
      id: content.id,
      title: content.title,
      text: content.text,
      date: content.date,
      image: content.image,
      emotion: content.emotion
    });
    const ok = window.confirm("게시하겠습니까?");
    if(ok){
      toggleEditMode();
    }
  }
  useEffect(() => {
    onSnapshot(collection(db, "blog"), snapshot => {
      const contents = snapshot.docs.map((doc) => ({
        did: doc.id,
        ...doc.data(),
      }));
      setContentList(contents);
    })
  })
  return (
    <div className={classes.blog}>
      <header className={classes.header}>
        <h1>Blog</h1>
        <div>
          <button onClick={toggleEditMode}>
            <i class="fa-solid fa-feather"></i>
          </button>
          <button>logout</button>
        </div>
      </header>
      <div className={classes.wrap}>
        <div className={classes.emotion_wrap}>
          {/* <Emotion name="main"/> */}
        </div>
        {editMode && <AddForm onCancle={toggleEditMode} addContent={addContent} />}
        {showMode && (
          <ShowList onCancle={toggleShowMode} item={blogObj} user={user} />
        )}
        <ul className={classes.blog_list}>
          {contentList.map((item) => (
            <BlogList
              key={item.id}
              item={item}
              user={user}
              showList={toggleShowMode}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
