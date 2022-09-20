import React from "react";
import { useState } from "react";
import AddForm from "../../components/AddForm/AddForm";
import ShowList from "../../components/ShowList/ShowList";
import BlogList from "../../components/BlogList/BlogList";
import classes from "./Blog.module.css";

const DUMMY = [
  {
    id: "d1",
    date: "2022-09-20",
    title: "title1",
    text: "first text",
    image:
      "https://i.pinimg.com/564x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
  },
  {
    id: "d2",
    date: "2022-09-18",
    title: "title2",
    text: "first text",
    image:
      "https://i.pinimg.com/564x/b2/db/0a/b2db0ac7ddfe97fb862f02bdad38c3ee.jpg",
  },
  {
    id: "d3",
    date: "2022-08-20",
    title: "title3",
    text: "first text",
    image:
      "https://i.pinimg.com/564x/2d/ff/78/2dff7853ce5f405a87442bb8d3929369.jpg",
  },
];

const Blog = (props) => {
  const user = true;
  const [editMode, setEditMode] = useState(false);
  const [showMode, setShowMode] = useState(false);
  const [blogObj, setBlogObj] = useState({});
  const toggleEditMode = () => setEditMode((prev) => !prev);
  const toggleShowMode = (item) => {
    setShowMode((prev) => !prev)
    setBlogObj(item);
  };
  return (
    <div className={classes.blog}>
      <header className={classes.header}>
        <h1>Blog</h1>
        <div>
          <button onClick={toggleEditMode}>create</button>
          <button>logout</button>
        </div>
      </header>
      <div className={classes.wrap}>
        {editMode && <AddForm onCancle={toggleEditMode} />}
        {showMode && <ShowList onCancle={toggleShowMode} item={blogObj} user={user}/>}
        <ul className={classes.blog_list}>
          {DUMMY.map((item) => (
            <BlogList key={item.id} item={item} user={user} showList={toggleShowMode}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
