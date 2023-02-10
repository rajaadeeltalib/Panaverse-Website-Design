'use client';
import { Box, Button, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image';
import Link from 'next/link';
import Panaverse from '../../public/Panaverse2.png';



function Header() {
  return (
    <Box boxShadow={'lg'}>
<Container maxW={1400} >
    <SimpleGrid templateColumns="repeat(3, 1fr)" >
        <Box margin="5" >
            <Image src={Panaverse} alt="Panaverse" height={10} width={40} ></Image>
            <Text fontWeight={"semibold"} textColor="#340A6B">Panaverse</Text>
        </Box>
        <Flex placeItems={"center"} color={'#340A6B'} fontSize={18} fontWeight={'semibold'} gap={10}  direction={{ base: 'column', md: 'row'  }}>
            <Link href="/">Home</Link>
            <Link href="/Syllabus">Syllabus</Link>
            <Link href="/Faculty">Faculty</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
        </Flex>
        <Box>
        <Button rounded={'full'}
                bg={'#00B0EE'}
                color={'white'}
                _hover={{
                  bg: '#340A6B',
                }} size={'lg'}  float={'right'} mt={'7'}>Apply</Button>
        </Box>
    </SimpleGrid>
</Container>

    </Box>
  )
}

export default Header