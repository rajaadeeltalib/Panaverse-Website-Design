"use client";
import {
    Button,
    Flex,
    Heading,
    Image,
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
              The project board is an exclusive resource for contract work. Its
              perfect for freelancers, agencies, and moonlighters.
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
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://raxr-react.envytheme.com/images/home-two/main-image2.png'
            }
          />
        </Flex>
      </Stack>
    );
  }