"use client";

import { Container, Text, VStack, Stack, Avatar, Icon, useColorModeValue, Box } from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { FaQuoteRight } from 'react-icons/fa';
interface TestimonialAttributes {
  username: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonial: TestimonialAttributes = {
  username: 'Adeel Talib',
  position: 'Student',
  company: 'PIAIC',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRegIR44sA0fyzyRvfUypWMJtvo9UQ57pkRxA&usqp=CAU',
  content: ``
};

const TestimonialCard = () => {
  return (
    <>
    <Box marginTop={10} textAlign={"center"} >
    <Text color="gray.500" fontSize={30} fontWeight={"bold"} textColor={"#00B0EE"}>Student Feedback</Text></Box>
    <Container maxW="5xl" p={{ base: 10, md: 14 }}>
      <VStack
        spacing={3}
        p={4}
        bg={useColorModeValue('white', 'blackAlpha.600')}
        border="3px solid"
        borderColor="#00B0EE"
        maxW="6xl"
        margin="0 auto"
        boxShadow="lg"
        pos="relative"
      >
        <Icon
          as={FaQuoteRight}
          w={10}
          h={10}
          color="#00B0EE"
          left="-1.3rem"
          position="absolute"
          top="-1.5rem"
        />
        <Stack direction="column" spacing={5}>
          <Text color="gray.500">
          The Panaverse course on Web 3.0 and the Metaverse provides students with a well-rounded understanding of these emerging technologies and their potential impact on various industries and society as a whole. Whether you are a student, a professional, or simply interested in these topics, this course provides valuable insights and knowledge that will enable you to make informed decisions and be at the forefront of the rapidly evolving Web 3.0 and Metaverse landscape.
          </Text>
        
          <Text fontWeight="bold" fontSize="lg" align="right" mr="3rem !important">
            {testimonial.username}
          </Text>
        </Stack>
        <Avatar
          name="avatar"
          src={testimonial.image}
          showBorder={true}
          borderColor="#00B0EE"
          size="xl"
          pos="absolute"
          right="-48px"
          bottom="-20px"
          shadow="lg"
        />
      </VStack>
    </Container>
    </>
  );
};

export default TestimonialCard;