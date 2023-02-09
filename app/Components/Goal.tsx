"use client";

import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, HStack, Icon } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface StatData {
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    label: 'Total DAO Members',
    score: '3000+'
  },
  {
    label: 'Students Enrolled',
    score: '5000+'
  },
  {
    label: 'Faculty Members',
    score: '8+'
  },
  {
    label: 'Courses Offered',
    score: '5+'
  }
];

const planList = [
  'Earn While You Learn.',
  'Reshape Pakistan by Revolutionizing Education.',
  'Build Economy.',
  'Business by Adopting Latest Cutting-Edge Technologies.',
  'Save Pakistan from Crises.'
];

const BrandStats = () => {
  return (
    <Container maxW="6xl" p={{ base: 4, sm: 10 }} bg="gray.100">
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Stack spacing={4}>
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold">
            Panaverse Goal
          </chakra.h1>
          <Text fontSize="md" color="gray.400" maxW="480px">
          The mission of Panaverse is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
          </Text>

          <Stack spacing={2}>
            <Text fontSize="md" color="gray.400">
            The Program in a Nutshell:
            </Text>
            {planList.map((data, index) => (
              <HStack key={index} alignItems="center" spacing={1} fontSize="md">
                <Icon as={AiFillCheckCircle} w={4} h={4} color="#00B0EE" />
                <Text fontSize="md">{data}</Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <SimpleGrid columns={2} spacing={5} pt={8} pl={{ base: 0, md: 10 }} margin="auto 0">
            {statData.map((data, index) => (
              <Stack
                key={index}
                pl={3}
                py={1}
                pr={1}
                borderLeft="2px solid"
                borderLeftColor="#00B0EE"
                justifyContent="space-between"
              >
                <Box fontSize="2xl" fontWeight="bold" color="#00B0EE">
                  {data.score}
                </Box>
                <Text fontSize="md">{data.label}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  );
};

export default BrandStats;