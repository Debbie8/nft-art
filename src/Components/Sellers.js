import { Box, Text, Stack, Image, Center, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Sellers({names, price, picture}) {
    const baseUrl = "http://127.0.0.1:8000/assets/images/";
    return (
        <Stack align='center' pt={4}>
            <Box border='1px solid black' bgColor='white'>
                <Stack direction={{ base: 'column', md: 'row' }} py={10} px={10}>
                    <Center>
                        <Image src={baseUrl + picture} alt='lady' boxSize='80px' rounded='100%' />
                    </Center>
                    <Flex direction='column' Align='center'>
                        <Text>@{names}</Text>
                        <Text >{price} ETH</Text>
                    </Flex>
                </Stack>
            </Box>
        </Stack>
    )
}
