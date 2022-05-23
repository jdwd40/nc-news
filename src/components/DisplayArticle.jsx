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
  Center,
  Image,
} from '@chakra-ui/react';

const DisplayArticle = () => {
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
    <Box>
      <div>
        <Container maxW="lg" mx="auto" borderRadius="10">
          <Heading fontSize="3xl" fontWeight="bold">
            {article.title}
          </Heading>
          <Box bg={'gray.100'} mt={2} mx={0} mb={6} pos={'relative'}>
            <Image
              rounded="md"
              objectFit="cover"
              src={
                'https://random.imagecdn.app/500/250'
              }
              layout={'fill'}
            />
          </Box>
          <Box shadow="md" p="2" m="2">
            <Text
            fontSize="lg"
            >{article.body}</Text>
          </Box>
        </Container>
        <Center>
          <VStack width="lg">
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
export default DisplayArticle;
