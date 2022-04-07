import { Box, Button, Heading, HStack, Image, Text, Stack, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Feature({ title, artist, amount, bgcolor, textcolor, btnbg, image }) {
    const baseUrl = "http://127.0.0.1:8000/assets/images/";
    // http://127.0.0.1:8000/assets/images/623de98f70eef.jpg

    return (

        <Stack direction='column' 
        >
            <Box w='100%' h='300px' overflow='hidden'>
                <Image src={baseUrl + image} alt='Image' mt='50px' boxSize={'100%'} objectFit='cover'/>
            </Box>
            <Box
                color='white'
                bg={bgcolor}
                mt='0 !important'
                w='100%'
            >
                <Flex direction='column' textAlign='left' px={4} py={4} gap={3}>
                    <Heading size='xs'
                        fontSize='18px'
                        color='black'
                        fontFamily='"Montserrat", Sans-serif;'

                    >
                        {title}
                    </Heading>

                    <Text
                        fontFamily='"Montserrat", Sans-serif;'
                        fontSize='11px'
                        color={textcolor}

                    >Artist: {artist}</Text>

                    <Text
                        fontFamily='"Montserrat", Sans-serif;'
                        fontSize='24px'
                        color='#000000'

                        fontWeight='600'

                    >{amount} ETH
                    </Text>
                </Flex>
                <HStack
                    p='0px 10px 8px'
                >

                    <Button
                        variant='outline'
                        color='#000'
                        border='1px solid black'
                        fontFamily='"Montserrat", Sans-serif;'
                        padding='15px 15px'
                        fontSize='12px'
                        bg='transparent'
                        _hover={{
                            bg: '#000',
                            color: 'white'
                        }}
                    >VIEW ARTWORK</Button>

                    <Button
                        bg='#000'
                        color='#fff'
                        border='1px solid black'
                        fontFamily='"Montserrat", Sans-serif;'
                        fontSize='13px'
                        padding='15px 20px'
                        _hover={{
                            bg: btnbg,
                            color: 'black'
                        }}
                    >PLACE A BID</Button>
                </HStack>
            </Box>
        </Stack>

    )
}
