//import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image
} from '@chakra-ui/react';

export default function ArticleCard(props) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
          objectFit='cover'
            src={
                'https://random.imagecdn.app/500/250'
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Heading
            color={'white'}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Boost your conversion rate
          </Heading>
          <Text color={'gray.500'} pt={6} noOfLines={5}>
           {props.text}
          </Text>
        </Stack>
   
      </Box>
    </Center>
  );
}