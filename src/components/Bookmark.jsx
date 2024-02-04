// components/Detail.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Bookmarks = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id.toString() === id)
  );

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <img className="rounded-t-lg w-full h-2/4" src={`https://picsum.photos/200?random=${post.id}`} alt="" />
      <p>User ID: {post.userId}</p>
    </div>
  );
};

export default Bookmarks;
