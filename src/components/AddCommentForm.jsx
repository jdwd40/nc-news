import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postCommentByArticleId } from '../utils/api';

const AddCommentForm = () => {
  const [comment, setComment] = useState('');
  const { article_id } = useParams();

  const handleChange = (e) => {
    setComment((currComment) => {
      let newComment = { ...currComment };
      newComment = e.target.value;
      return newComment;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('post comment here', comment);
    postCommentByArticleId(article_id, comment);
    setComment('');
  };

  return (
    <div className="add-comment-form">
      <form onSubmit={handleSubmit}>
        <h3>Signed in as: guest</h3>
        Add a new comment: to {article_id}
        <textarea
          rows="4"
          cols="30"
          type="textarea"
          value={comment}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add item</button>
      </form>
    </div>
  );
};

export default AddCommentForm;
