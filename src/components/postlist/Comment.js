import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ post }) {
  return (
    <div className="post-comment">
      <div className="avatar">
        <img src={post.author.avatar} alt={post.author.name} />
      </div>
      <div className="post-comment-content">
        <span className="post-comment-author-name">
          {post.author.name}
        </span>
        {post.content}
      </div>
    </div>
  );
}

Comment.propTypes = {
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
