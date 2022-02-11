import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { getTopics } from '../utils/api';

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <nav className="nav-bar">
      <Link key={'all'} to={`/articles`}>
        all
      </Link>
      {topics.map((topic) => {
        return (
          <main className="nav-links">
            <Link
              className="topic-links"
              key={topic.slug}
              to={`/articles/?topic=${topic.slug}`}
            >
              {topic.slug}
            </Link>
          </main>
        );
      })}
      <Link key={'Sign In'} to={`/sign_in`}>
        Sign In
      </Link>
    </nav>
  );
};

export default Nav;
