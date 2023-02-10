"use client";

import { ReactNode } from 'react';
import Link from 'next/link';
import Panaverse from '../../public/Panaverse2.png'

import {
  Box,
  Container,
    SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

const Logo = (props: any) => {
  return (
    
    <Box margin="5">
            <Image src={Panaverse} alt="Panaverse" height={30} width={90} ></Image>
            <Text fontWeight={"semibold"} textColor="#340A6B">Panaverse</Text>
        </Box>
    
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2023 Panaverse
            </Text>
          </Stack>
          <Stack align={'flex-start'} >
            <Box textColor={"#00B0EE"}>
            <ListHeader >Panaverse</ListHeader>
            </Box>
            <Link href={'/'} >Home</Link>
            <Link href={'/About'}>About</Link>
            <Link href={'/Syllabous'}>Syllabous</Link>
            <Link href={'/Faculty'}>Faculty</Link>
            <Link href={'/Contact'}>Contact</Link>
          </Stack>
          <Stack align={'flex-start'}>
          <Box textColor={"#00B0EE"}>
            <ListHeader >Resources</ListHeader>
            </Box>
            <Link href={'https://www.piaic.org/'}>PIAIC</Link>
            <Link href={'https://www.panaverse.co/'}>Panaverse</Link>
            <Link href={'https://portal.piaic.org/signup'}>Apply Now</Link>
            <Link href={'/Syllabous'}>AI</Link>
            <Link href={'/Syllabous'}>CNC</Link>            
          </Stack>
          <Stack align={'flex-start'}>
          <Box textColor={"#00B0EE"}>
            <ListHeader >Legal</ListHeader>
            </Box>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
          <Box textColor={"#00B0EE"}>
            <ListHeader >Social Media</ListHeader>
            </Box>
            <Link href={'https://www.facebook.com/groups/panaverse/'}>Facebook</Link>
            <Link href={'https://twitter.com/Panaverse_edu'}>Twitter</Link>
            <Link href={'https://www.youtube.com/@panaverse'}>Youtube</Link>
            <Link href={'https://www.linkedin.com/company/panaverse/'}>LinkedIn</Link>
            <Link href={'https://github.com/panaverse'}>Github</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}