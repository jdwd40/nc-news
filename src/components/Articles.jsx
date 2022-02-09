import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticlesByTopic, getArticles } from '../utils/api';
import { useLocation } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const search = useLocation().search;
  let topic = new URLSearchParams(search).get('topic');

  console.log(topic);

  useEffect(() => {
    // if topic is not set thtn

    if (topic === null || topic === 'All Items') {
      getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi);
        console.log('got here');
      });
    } else {
      getArticlesByTopic(topic).then((selectedArticlesFromApi) => {
        setArticles(selectedArticlesFromApi);
      });
    }
  }, [topic]);
  //console.log(articles);

  return (
    <main className="articles-container">
      <h2>{topic}</h2>
      <ul>
        {articles.map((article) => {
          //console.log(article);
          return (
            <main className="article-links">
              <Link
                key={article.article_id}
                to={`/articles/${article.article_id}`}
              >
                <li>{article.title}</li>
              </Link>
            </main>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
