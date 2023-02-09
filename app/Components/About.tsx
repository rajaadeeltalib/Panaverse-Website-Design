"use client";
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} >
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        textColor={'#340A6B'}
        
        fontWeight={'bold'}>
        Panaverse
      </chakra.h1>
      <chakra.h1
        textAlign={'center'}
        textColor={'#00B0EE'}
        fontSize={'4xl'}
       
        fontWeight={'bold'}>
        Decentralized Autonomous Organization
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Students'}
          stat={'5,000+'}
          icon={<BsPerson size={'3em'} />}
        />
        <StatsCard
          title={'Programs'}
          stat={'5+'}
          icon={<FiServer size={'3em'} />}
        />
        <StatsCard
          title={'Cities'}
          stat={'4+'}
          icon={<GoLocation size={'3em'} />}
        />
      </SimpleGrid>
      <Flex mt={10}></Flex>
    </Box>
  );
}