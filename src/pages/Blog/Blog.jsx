import React from "react";
import { useState } from "react";
import AddForm from "../../components/AddForm/AddForm";
import ShowList from "../../components/ShowList/ShowList";
import BlogList from "../../components/BlogList/BlogList";
import classes from "./Blog.module.css";
import Emotion from "../../components/Emotion/Emotion";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

// updateDoc(doc(db, "diary", diary.did), {
//   date: date,
//   title: title,
//   content: content,
//   img: img
// });

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

  // CREATE
  const addContent = async (content) => {
    const ok = window.confirm("게시하겠습니까?");
    if (ok) {
      await addDoc(collection(db, "blog"), {
        id: content.id,
        title: content.title,
        text: content.text,
        date: content.date,
        image: content.image,
        emotion: content.emotion,
      });
      toggleEditMode();
      toggleShowMode();
    }
  };

  // DELETE
  const deleteContent = async (did) => {
    const ok = window.confirm("삭제하시겠습니까?");
    if(ok){
      await deleteDoc(doc(db, "blog", did));
      toggleShowMode();
    }
  }

  // READ
  useEffect(() => {
    onSnapshot(collection(db, "blog"), (snapshot) => {
      const contents = snapshot.docs.map((doc) => ({
        did: doc.id,
        ...doc.data(),
      }));
      setContentList(contents);
    });
  });

  return (
    <div className={classes.blog}>
      {/* HEADER */}
      <header className={classes.header}>
        <h1>Blog</h1>
        <div>
          <button onClick={toggleEditMode}>
            <i className="fa-solid fa-feather"></i>
          </button>
          <button>logout</button>
        </div>
      </header>
      {/* MAIN */}
      <div className={classes.wrap}>
        <div className={classes.emotion_wrap}>
          {/* <Emotion name="main"/> */}
        </div>
        {editMode && (
          <AddForm 
            onCancle={toggleEditMode} 
            addContent={addContent} 
          />
        )}
        {showMode && (
          <ShowList
            onCancle={toggleShowMode}
            item={blogObj}
            user={user}
            onDelete={deleteContent}
          />
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
