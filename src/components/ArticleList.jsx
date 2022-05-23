import React from 'react';
import { getArticlesByTopic, getArticles } from '../utils/api';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
} from '@chakra-ui/react';


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const search = useLocation().search;
  let topic = new URLSearchParams(search).get('topic');

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
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">{topic}</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        //  display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          > 
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <Heading marginTop="1" size="md">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {articles.map((article) => {
                return (
                  <main>
                    <ul>
                      <VStack>
                        <Link
                          key={article.article_id}
                          to={`/articles/${article.article_id}`}
                        >
                          <Heading pb="1">
                            <li>{article.title}</li>
                          </Heading>
                        </Link>
                        <li>
                          <Image
                            borderRadius="lg"
                            src={
                              'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                            }
                            alt="some good alt text"
                            objectFit="contain"
                          />
                        </li>
                        <li>
                          <Text pb={1}>
                          <Box>{article.body}</Box>
                          </Text>
                        </li>
                      </VStack>
                    </ul>
                  </main>
                );
              })}
            </Link>
          </Heading>

         
        </Box>
      </Box>
      {/* <Heading as="h2" marginTop="5">
        Latest articles
      </Heading> */}
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem
          width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}
        ></WrapItem>
      </Wrap>
    </Container>
  );
};

export default ArticleList;
