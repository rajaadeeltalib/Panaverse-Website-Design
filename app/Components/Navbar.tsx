"use client";
import React from 'react'
import {Flex } from '@chakra-ui/react'
import { HStack, Stack,} from '@chakra-ui/layout';
import {ListItem, UnorderedList,} from '@chakra-ui/react'
import Link from 'next/link';
import { Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'





function Navbar() {
  return (
    <Flex bg={"whitesmoke"} >
       <Stack direction='row'>
  <Image  marginInline={5} marginTop={5}   boxSize='50px' src='panaverse.png' alt='Panaverse' />
</Stack>
<Flex >
       
      <UnorderedList listStyleType={'none'}>
      <HStack spacing={50} marginInline={59} marginTop={8} textAlign={"center"} marginBottom={8} textColor="#0149FF">
  <ListItem fontSize={15} fontWeight={"bold"} ><Link href="/">Home</Link></ListItem>
  <ListItem fontSize={15} fontWeight={"bold"} ><Link href="/about">About</Link></ListItem>
  <ListItem fontSize={15} fontWeight={"bold"} ><Link href="/cources">Cources</Link></ListItem>
  <ListItem fontSize={15} fontWeight={"bold"} ><Link href="/contact">Contact</Link></ListItem>
  
  </HStack>
</UnorderedList> 

<HStack  marginInline={700} marginTop={5} textAlign={"center"} marginBottom={5} color={"green.400"}>

    <Button colorScheme={"messenger"} ><Link href={"https://portal.piaic.org/signup"}>Apply Now</Link></Button>
    
</HStack>
    
    
</Flex>
</Flex>        
        
        
  )
}

export default Navbar