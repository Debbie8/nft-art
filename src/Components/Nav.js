import React from 'react'
import {HStack, Image, Link, Spacer, Flex } from '@chakra-ui/react'

export default function Nav() {
    return (

    
            <Flex align={"center"} bg='#000' h='90px' w='100%'>
                <Image src='/images/debb (3).png' alt='Image' boxSize='100px' ml={{base:'8px', md:'29px'}}/>
                <Spacer />
                <HStack  color='white' d={{base:'none', md:'flex'}} spacing={8} pr={8}>
                    <Link href='/'>Home</Link>
                    <Link>Discover</Link>
                    <Link href='/author'>Author</Link>
                    <Link href='/contact'>Contact</Link>
                </HStack>
              
            </Flex>
     


    )
}
