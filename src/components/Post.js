import React, { useRef, useState } from 'react';

import './Post.css';
import Card from './Card';

const Post = ({ title, body }) => {
  const bodyRef = useRef(null);
  const [hidden, setHidden] = useState(true);

  function toggleCardBody() {
    bodyRef.current.hidden = !bodyRef.current.hidden;
    setHidden(bodyRef.current.hidden);
  }

  return (
    <Card>
      <div className="post-title">{title}</div>
      <i className="fas fa-angle-up icon" onClick={toggleCardBody}></i>

      <div className="post-body" hidden={hidden} ref={bodyRef}>
        {body}
      </div>
    </Card>
  );
};

export default Post;
