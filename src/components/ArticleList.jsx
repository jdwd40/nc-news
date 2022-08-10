import React from 'react';
import { getArticlesByTopic, getArticles } from '../utils/api';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  UnorderedList,
  ListItem,
  Flex,
} from '@chakra-ui/react';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const search = useLocation().search;
  let topic = new URLSearchParams(search).get('topic');

  if (topic === null) topic = 'All';

  useEffect(() => {
    if (topic === 'All' || topic === 'All Items') {
      getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi);
        topic = 'All Items';
      });
    } else {
      getArticlesByTopic(topic).then((selectedArticlesFromApi) => {
        setArticles(selectedArticlesFromApi);
      });
    }
  }, [topic]);

  return (
    <Box
      // display="flex"
      // flex="1"
      // justifyContent="center"
      // marginTop={{ base: '3', sm: '0' }}
    >
      <Text marginTop="1" size="md">
        {articles.map((article) => {
          return (
            <UnorderedList>
              <Link
                key={article.article_id}
                href={`/articles/${article.article_id}`}
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
              >
                <Heading pb="1" size="xl">
                  <ListItem>{article.title}</ListItem>
                </Heading>
                <ListItem>
                  <Text>
                    <ArticleCard text={article.body} />
                  </Text>
                </ListItem>
              </Link>
            </UnorderedList>
          );
        })}
      </Text>
    </Box>
  );
};

export default ArticleList;
