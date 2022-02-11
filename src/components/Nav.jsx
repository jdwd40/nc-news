import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { getTopics } from '../utils/api';
import { UserContext } from '../contexts/User';
import { useContext } from 'react';

const Nav = () => {
  const [topics, setTopics] = useState([]);
  const { loggedInUser } = useContext(UserContext);
  console.log('from nav.jsx', loggedInUser);

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
      <span className="user-text">User: {loggedInUser}</span>
      <Link key={'Sign In'} to={`/sign_in`}>
        Sign In
      </Link>
    </nav>
  );
};

export default Nav;
