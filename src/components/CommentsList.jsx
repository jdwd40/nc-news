import React, { useEffect, useState } from 'react';
import { getCommentsById } from '../utils/api';

const CommentsList = (props) => {
  const [comments, setComments] = useState([]);
  const article_id = props.article_id;

  useEffect(() => {
    getCommentsById(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <div className="comments-list">
      <p>
        Comments <span className="bold">{comments.length}</span>
      </p>
      <ul>
        {comments.map((comment) => {
          return (
            <>
              <div className="comment-body">
                <li>{comment.body}</li>
                <br />
                <li>Author: {comment.author}</li>
                <li>
                  Votes: <span className="bold">{comment.votes}</span>
                </li>
                <li className="created-at">Created at: {comment.created_at}</li>
              </div>
              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
