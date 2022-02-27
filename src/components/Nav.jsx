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
    <Box
    borderWidth="2px"
    bg="gray.300"
    alignItems="center"
    textAlign="center"
    width="100%"
    >
        <Center>
        <nav>
          <HStack spacing={4} pt="3" borderRadius="lg">
            <Button
              colorScheme='teal' 
              variant='outline'
            >
              <Link key={'all'} to={`/articles`}>
                all
              </Link>
            </Button>
            {topics.map((topic) => {
              return (
                <main>
                  <Button
                  colorScheme='teal' 
                  variant='outline'
                  >
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
          </HStack>
          <span className="user-text">User: {loggedInUser}</span>
          <Link key={'Sign In'} to={`/sign_in`}>
            Sign In
          </Link>
        </nav>
    </Center>
      </Box>
  );
};

export default Nav;
