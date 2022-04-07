import { Box, Center, Image, Stack, Text, VStack } from '@chakra-ui/react'


export default function Collections({ Fimage, simage, titles, names }) {
    const baseUrl = "http://127.0.0.1:8000/assets/images/";

    return (
        <Stack px={{ base: '12px', md: "48px" }}>
            <VStack
             
                bg='white'
            >
                <Box w='100%'  h='300px' overflow='hidden' >
                    <Image src={baseUrl + Fimage} alt='image'  boxSize={'100%'} objectFit='cover' />
                </Box>

                <Center zIndex='2' transform='auto' translateY={-10}>
                    <Image src={baseUrl + simage} alt='lady' boxSize='80px' rounded='100%' />
                </Center>

                <VStack pb='40px'>
                    <Text m='0px' >{titles}</Text>
                    <Text mt='5px'>@{names}</Text>
                </VStack>
            </VStack>

        </Stack>
    )
}
