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
  Center
} from '@chakra-ui/react';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const search = useLocation().search;
  let topic = new URLSearchParams(search).get('topic');

  useEffect(() => {
    if (topic === 'All' || topic === 'All Items') {
      getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi);
        topic="All Items";
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
    <Center>
    <Box bg="#999999" color="#003333" p="1" border-radius="lg" maxW="lg">
      <main>
        <Heading color="#003333"
        fontSize="3xl"
        fontWeight="bold"
        pb="3"
        >
          {topicDisplay()}
        </Heading>
        <ul>
          {articles.map((article) => {
            return (
              <main>
                <VStack
                >
                  <Link
                    key={article.article_id}
                    to={`/articles/${article.article_id}`}
                  >
                    <Text pb="1">
                      <li>{article.title}</li>
                
                    </Text>
                  </Link>
                </VStack>
              </main>
            );
          })}
        </ul>
      </main>
    </Box>
    </Center>
  );
};

export default Articles;
