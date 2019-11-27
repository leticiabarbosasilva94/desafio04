import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar">
          <img src={post.author.avatar} alt={post.author.name} />
        </div>
        <div className="post-data">
          <p className="post-author-name">{post.author.name}</p>
          <p className="post-date">{post.date}</p>
        </div>
      </div>
      <div className="post-content">
        {post.content}
      </div>
      {post.comments.map((comment) => <Comment key={comment.id} post={comment} />)}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
    comments: PropTypes.array,
  }).isRequired,
};
