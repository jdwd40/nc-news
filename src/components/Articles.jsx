import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { checkTopicExists, getArticles } from './utils/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  // check topic exists else show all topics
  //checkTopicExists(topic);

  console.log(checkTopicExists(topic));

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);
  console.log(articles);

  return (
    <main className="Articles">
      <h2>All Articles</h2>
      <ul>
        {articles.map((article) => {
          //console.log(article);
          return (
            <Link
              className="article-links"
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <li>
                <h3>{article.title}</h3>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
