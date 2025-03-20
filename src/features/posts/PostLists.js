import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import PostsExcerpts from "./PostsExcerpts";

const PostLists = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  const postHeading = <h2>Posts</h2>;
  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "Succeeded") {
    const orderPost = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderPost.map((post,index) => 
      <PostsExcerpts key={index} post={post} />
    );
  } else if (postsStatus === "failed") {  
    content = <p>{error}</p>;
  }

  return (  
    <section>
      {postHeading}
      {content}
    </section>
  );
};

export default PostLists;
