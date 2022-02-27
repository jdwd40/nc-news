import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticlesByTopic, getArticles } from '../utils/api';
import { useLocation } from 'react-router-dom';
import {
  Button,
  Heading,
  Text,
  Box,
  Stack,
  VStack,
  StackDivider,
} from '@chakra-ui/react';

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
        topic="All Items";
        console.log('got here', topic);
      });
    } else {
      getArticlesByTopic(topic).then((selectedArticlesFromApi) => {
        setArticles(selectedArticlesFromApi);
      });
    }
  }, [topic]);
  //console.log(articles);

  const topicDisplay = () => {
    console.log('from topicDisplay ', topic);
    if (topic === null){
      topic="All Items";
    } else {
      topic = topic.charAt(0).toUpperCase() + topic.slice(1);
    }
    return (
      <>
      {topic}
      </>
    )
  }

  return (
    <Box bg="gray.200" color="teal.700" p="1" border-radius="lg">
      <main>
        <Heading bgGradient="linear(to-l, green.300, blue.600)" bgClip="text"
        fontSize="3xl"
        fontWeight="bold"
        pb="1"
        >
          {topicDisplay()}
        </Heading>
        <ul>
          {articles.map((article) => {
            return (
              <main>
                <VStack bg="gray.100"
                >
                  <Link
                    key={article.article_id}
                    to={`/articles/${article.article_id}`}
                  >
                    <Text as="i">
                      <li>{article.title}</li>
                      <hr></hr>
                    </Text>
                  </Link>
                </VStack>
              </main>
            );
          })}
        </ul>
      </main>
    </Box>
  );
};

export default Articles;
