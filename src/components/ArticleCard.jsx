import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getArticleById, getArticles, sendVoteToArticle } from '../utils/api';
import CommentsList from './CommentsList';

const ArticleCard = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [sentVoteCount, setSentVoteCount] = useState();
  const [votes, setVotes] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, []);

  const handleSendVoteClick = () => {
    setSentVoteCount((currCount) => currCount + article.votes);
    sendVoteToArticle(article_id);
    return currCount;
  };

  return (
    <div className="article-card">
      <div className="article-container">
        <h2>{article.title}</h2>
        <p className="article-body">{article.body}</p>
        <button
          onClick={() => {
            navigate(`/comment/${article_id}`);
          }}
        >
          Post Comment
        </button>
        <span className="likes">Likes: {article.votes}</span>
        <button onclick={handleSendVoteClick}>Up Vote</button>
      </div>
      <CommentsList article_id={article_id} />
    </div>
  );
};

export default ArticleCard;
