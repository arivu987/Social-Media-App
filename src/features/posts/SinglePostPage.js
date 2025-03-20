import React from "react";
import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    <section>
      <h2>Post not found</h2>
    </section>;
  }
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="postCredit">
        <Link to = {`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </div>
    </article>
  );
};
export default SinglePostPage;
