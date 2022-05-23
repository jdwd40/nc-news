import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postCommentByArticleId } from '../utils/api';
import {
  Button,
  Heading,
  Text,
  Box,
  Stack,
  HStack,
  Center,
  FormControl,
  VStack,
} from '@chakra-ui/react';

const AddCommentForm = () => {
  const [comment, setComment] = useState('');
  const { article_id } = useParams();
  let navigate = useNavigate();

  const handleChange = (e) => {
    setComment((currComment) => {
      let newComment = { ...currComment };
      newComment = e.target.value;
      return newComment;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('post comment here', comment);
    postCommentByArticleId(article_id, comment).then(() => {
      setComment('');
      navigate(`/articles/${article_id}`);
    });
  };

  return (
    <Center>
    <Box bg='#999999' color="#003333" maxW="lg">
      {/* <VStack direction="column" spacing="1"> */}
        <FormControl>
          <form onSubmit={handleSubmit}>
            <Text as="i">Signed in as: grumpy19</Text>
            <Heading
              color="#003333"
              fontSize="2xl"
              fontWeight="extrabold"
            >
              Add a new comment
            </Heading>
            <Box color="#003333" bg="#669999" maxW="md">
              <textarea
              bg="#669999"
                rows="4"
                cols="30"
                type="textarea"
                value={comment}
                onChange={handleChange}
              ></textarea>
            </Box>
            <Button color="teal.700" bg="gray.100" type="submit">
              Post Comment
            </Button>
          </form>
        </FormControl>
      {/* </VStack> */}
    </Box>
    </Center>
  );
};

export default AddCommentForm;
