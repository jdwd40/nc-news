import React from 'react';
import { Button, Heading, Text, Box } from '@chakra-ui/react';

const Header = () => {
  return (
    <div>
      <Box bg="gray.200" borderWidth={2}>
      <Heading
      bgGradient='linear(to-l, green.300, blue.600)'
      bgClip='text'
      fontSize='6xl'
      fontWeight='extrabold'
      >
        NC News
      </Heading>
      </Box>
    </div>
  );
};

export default Header;


;
