import React, { useState, useEffect } from 'react';

import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responsePosts = await response.json();
    setPosts(responsePosts);
  }

  function renderPost() {
    return posts.map((post) => {
      return <Post key={post.id} title={post.title} body={post.body} />;
    });
  }

  return <div>{renderPost()}</div>;
};

export default Posts;
