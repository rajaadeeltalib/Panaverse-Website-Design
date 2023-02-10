"use client";
import Hero from '../../public/hero-image.png';
import Image from 'next/image';
import { motion } from "framer-motion";

import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg="gray.100">
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'} color="#00B0EE"
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#340A6B',
                  zIndex: -1,
                }}>
                Web 3.0
              </Text>
              <br />{' '}
              <Text color={'#340A6B'} as={'span'}>
                and Metaverse Developer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
                rounded={'full'}
                bg={'#340A6B'}
                color={'white'}
                _hover={{
                  bg: '#00B0EE',
                }}>
                Explore Courses
              </Button>
              <Button
                rounded={'full'}
                bg={'#00B0EE'}
                color={'white'}
                _hover={{
                  bg: '#340A6B',
                }}>
                About Us
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <motion.div
            initial={{ rotate: -10}}
            animate={{ rotate: 10 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
        <Flex flex={1}>
          <Image width={650}                           
            alt={'Hero Image'}
            src={Hero}
          ></Image>
        </Flex>
        </motion.div>
      </Stack>
    );
  }