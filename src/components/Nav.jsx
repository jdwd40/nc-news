import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { getTopics } from '../utils/api';
i

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <nav className="Nav">
      {topics.map((topic) => {
        return (
          <main>
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
    </nav>
  );
};

export default Nav;
