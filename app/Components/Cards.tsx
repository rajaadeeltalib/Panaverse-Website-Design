"use client";

import Link from 'next/link';

import { SVGProps } from 'react';
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex
} from '@chakra-ui/react';

interface IFeature {
  heading: string;
  content: string;
  icon: SVGProps<SVGElement>;
}

const features: IFeature[] = [
  {
    heading: 'Web 3.0 and Metaverse',
    content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  {
    heading: 'Artificial Intelligence',
    content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  {
    heading: 'Cloud-Native Computing',
    content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  {
    heading: 'Ambient Computing and IoT',
    content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  {
    heading: 'Genomics and Bioinformatics',
    content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  },
  {
    heading: 'Network Programmability and Automation',
    content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    )
  }
];

const Features = () => {
  return (
    <>
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold"  textAlign="center" textColor={"#340A6B"}>
        Panaverse
      </chakra.h3>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center" textColor={"#00B0EE"}>
        Currently Offered Courses
      </chakra.h3>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {features.map((feature, index) => (
          <Box
            key={index}
            bg={"gray.100"}
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
          >
            <Flex
              p={2}
              w="max-content"
              color="white"
              bgGradient="linear(to-br, #228be6, #15aabf)"
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4}>
              {feature.content}
            </Text>
            <Link href="/Syllabus"  style={{color: '#00B0EE'}}>
              Learn more →
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Container>

    
    
    
    </>
  );
};

export default Features;