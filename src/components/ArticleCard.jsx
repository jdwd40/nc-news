import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleById, getArticles, sendVoteToArticle } from '../utils/api';
import CommentsList from './CommentsList';
import {
  Button,
  Heading,
  Text,
  Box,
  Stack,
  VStack,
  StackDivider,
  Container,
  Center
} from '@chakra-ui/react';

const ArticleCard = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [sentVoteCount, setSentVoteCount] = useState();
  const [votes, setVotes] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, []);

  const handleSendVoteClick = () => {
    // setSentVoteCount((currCount) => currCount + article.votes);
    // sendVoteToArticle(article_id);
    // return currCount;
  };

  return (
    <Box bg="gray.200">
      <div>
        <Container
          maxW="lg"
          mx="auto"
          bg="#0B3C5D"
          color="white"
          borderRadius="10"
        >
          <Heading color="#D9B310" fontSize="3xl" fontWeight="bold">
            {article.title}
          </Heading>
          <Box shadow="md" p="2" m="2">
            <p>{article.body}</p>
          </Box>
        </Container>
        <Center>
          <VStack bg="#1D2731" width="lg" color="#fff">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigate(`/comment/${article_id}`);
              }}
            >
              Post Comment
            </Button>
            <Box>
              <span className="likes">Likes: {article.votes}</span>
              <Button size="sm" onClick={handleSendVoteClick}>
                Up Vote
              </Button>
            </Box>
          </VStack>
        </Center>
      </div>
      <CommentsList article_id={article_id} />
    </Box>
  );
};

export default ArticleCard;
