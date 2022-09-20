import React from "react";
import { useState } from "react";
import AddForm from "../../components/AddForm/AddForm";
import BlogList from "../../components/BlogList/BlogList";
import classes from "./Blog.module.css";

const DUMMY = [
  {
    id: "d1",
    date: "2022-09-20",
    title: "title",
    text: "first text",
    image:
      "https://i.pinimg.com/564x/b2/db/0a/b2db0ac7ddfe97fb862f02bdad38c3ee.jpg",
  },
  {
    id: "d2",
    date: "2022-09-20",
    title: "title",
    text: "first text",
    image:
      "https://i.pinimg.com/564x/b2/db/0a/b2db0ac7ddfe97fb862f02bdad38c3ee.jpg",
  },
  {
    id: "d3",
    date: "2022-09-20",
    title: "title",
    text: "first text",
    image:
      "https://i.pinimg.com/564x/b2/db/0a/b2db0ac7ddfe97fb862f02bdad38c3ee.jpg",
  },
];

const Blog = (props) => {
  const user = true;
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode((prev) => !prev);
  return (
    <div className={classes.blog}>
      {editMode && <AddForm onCancle={toggleEditMode} />}
      <div className={classes.header}>
        <button onClick={toggleEditMode}>create</button>
      </div>
      <ul className={classes.blog_list}>
        {DUMMY.map((item) => (
          <BlogList key={item.id} item={item} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default Blog;
