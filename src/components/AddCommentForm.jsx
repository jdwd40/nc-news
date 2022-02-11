import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postCommentByArticleId } from '../utils/api';

const AddCommentForm = () => {
  const [comment, setComment] = useState('');
  const { article_id } = useParams();
  let navigate = useNavigate();

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
    postCommentByArticleId(article_id, comment).then(() => {
      setComment('');
      navigate(`/articles/${article_id}`);
    });
  };

  return (
    <div className="add-comment-form">
      <form onSubmit={handleSubmit}>
        <h3>Signed in as: grumpy19</h3>
        Add a new comment
        <textarea
          rows="4"
          cols="30"
          type="textarea"
          value={comment}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default AddCommentForm;
