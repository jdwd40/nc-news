import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticleById, getArticles } from '../utils/api';
import CommentsList from './CommentsList';

const ArticleCard = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

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
      </div>
      <CommentsList article_id={article_id} />
    </div>
  );
};

export default ArticleCard;
