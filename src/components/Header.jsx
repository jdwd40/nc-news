import React from 'react';
import { Button, Heading, Text, Box, Center } from '@chakra-ui/react';

const Header = () => {
  return (
    <div>
      <Center>
        <Box width="lg" maxW="lg">
          <Heading maxW="lg" fontSize="6xl" fontWeight="extrabold">
            NC News
          </Heading>
        </Box>
      </Center>
    </div>
  );
};

export default Header;
