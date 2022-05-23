import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { getTopics } from '../utils/api';
import { UserContext } from '../contexts/User';
import { useContext } from 'react';
import {
  Button,
  Heading,
  Text,
  Box,
  Stack,
  HStack,
  Center,
} from '@chakra-ui/react';

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
    <Center>
      <Box
        borderWidth="2px"
        bg="#003333"
        color="#999999"
        alignItems="center"
        textAlign="center"
        width="lg"
        borderRadius="10"
      >
        <nav>
          <HStack spacing={1} pl="1" pt="2" pb="2" borderRadius="lg" maxW="md">
            <Button variant="outline">
              <Link key={'all'} to={`/articles`}>
                all
              </Link>
            </Button>
            {topics.map((topic) => {
              return (
                <main>
                  <Button variant="outline">
                    <Link
                      key={topic.slug}
                      to={`/articles/?topic=${topic.slug}`}
                    >
                      {topic.slug}
                    </Link>
                  </Button>
                </main>
              );
            })}
            <span className="user-text">User: {loggedInUser}</span>
            <Link key={'Sign In'} to={`/sign_in`}>
              Sign In
            </Link>
          </HStack>
        </nav>
      </Box>
    </Center>
  );
};

export default Nav;
