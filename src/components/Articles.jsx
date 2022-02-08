import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticlesByTopic, getArticles } from '../utils/api';
import { useLocation } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  // check topic exists else show all topics
  const search = useLocation().search;
  const topic = new URLSearchParams(search).get('topic');

  console.log(topic);

  useEffect(() => {
    // if topic is not set thtn
    if (topic === null) {
      getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi);
      });
    } else {
      getArticlesByTopic(topic).then((selectedArticlesFromApi) => {
        setArticles(selectedArticlesFromApi);
      });
    }
  }, []);
  //console.log(articles);

  return (
    <main className="Articles">
      <h2>Articles</h2>
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
