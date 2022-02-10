import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getArticleById, getArticles } from '../utils/api';
import AddCommentForm from './AddCommentForm';
import CommentsList from './CommentsList';

const ArticleCard = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      console.log('after getArtsbyId', articleFromApi);
      setArticle(articleFromApi);
    });
  }, []);

  console.log('from article Card: ', article);

  return (
    <div className="article-card">
      <div className="article-container">
        <h2>{article.title}</h2>
        <p className="article-body">{article.body}</p>
        <button
          onClick={() => {
            console.log('got here inside post button onclick');

            navigate(`/comment/${article_id}`);
          }}
        >
          Post Comment
        </button>
        <span className="likes">Likes: {article.votes}</span>
        <button>Up Vote</button>
      </div>
      <CommentsList article_id={article_id} />
    </div>
  );
};

export default ArticleCard;
