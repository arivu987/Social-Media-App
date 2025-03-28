import React from "react";
import { selectAllUsers } from "../users/usersSlice";
import { useSelector } from "react-redux";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return <span>By {author ? author.name : "Unknown User"}</span>;
};

export default PostAuthor;
