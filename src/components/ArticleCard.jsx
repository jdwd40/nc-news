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
        <Heading
          bgGradient="linear(to-l, green.500, blue.600)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="bold"
        >
          {article.title}
        </Heading>
        <Box shadow="md" p="2" m="2">
          <p>{article.body}</p>
        </Box>
        <VStack>
          <Button
            colorScheme="teal"
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
          <Button size="sm" onClick={handleSendVoteClick}>Up Vote</Button>
          </Box>
        </VStack>
      </div>
      <CommentsList article_id={article_id} />
    </Box>
  );
};

export default ArticleCard;
