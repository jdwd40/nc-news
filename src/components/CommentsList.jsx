import React, { useEffect, useState } from 'react';
import { getCommentsById } from '../utils/api';
import {
  Button,
  Heading,
  Text,
  Box,
  Stack,
  HStack,
  Center,
} from '@chakra-ui/react';

const CommentsList = (props) => {
  const [comments, setComments] = useState([]);
  const article_id = props.article_id;

  useEffect(() => {
    getCommentsById(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <Center>
    <Box shadow="md" bg="#0B3c5D" color="#fff" maxW ="lg">
    <div>
      <p>
        Comments <span className="bold">{comments.length}</span>
      </p>
      <ul>
        {comments.map((comment) => {
          return (
            <>
              <div>
              <Box shadow="md" bg="#328CC1" borderRadius="lg" m="5">
                <li>{comment.body}</li>
        
                <li>Author: {comment.author}</li>
                <li>
                  Votes: <span className="bold">{comment.votes}</span>
                </li>
                <li className="created-at">Created at: {comment.created_at}</li>
                </Box>
              </div>
         
            </>
          );
        })}
      </ul>
    </div>
    </Box>
    </Center>
  );
};

export default CommentsList;
