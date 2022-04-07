import { Box, HStack, Input, Text, Button, Stack, Heading, Flex, SimpleGrid, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'
import Letter from '../Components/Letter'
import Sellers from '../Components/Sellers'
import Feature from './Feature'

export default function Screen() {

    const [response, setResponse] = useState(null)

    const art = () => {

        fetch("http://localhost:8000/api/products")
            .then(response => response.json())
            .then(result => {
                setResponse(result)
                console.log(result);
            })
            .catch(error => console.log('error', error));


    }
    useEffect(() => {
        art();
    }, []);


    const [responses, setResponses] = useState(null)

    const collectart = () => {
        fetch("http://localhost:8000/api/collect")
            .then(response => response.json())
            .then(result => {
                setResponses(result)
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }


    useEffect(() => {
        collectart();
    }, []);



    const [res, setRes] = useState(null)
    const sellersart = () => {

        fetch("http://localhost:8000/api/seller")
            .then(response => response.json())
            .then(result => {
                setRes(result)
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        sellersart();
    }, []);



    return (
        <Box bg='#faf6f1'>
            <Stack direction={['column', 'row']} h={{ base: 'auto', md: '80vh' }}>
                <Box w={{ base: '100%', md: '70%' }} align='left' px={{ base: 4, md: 12 }}>
                    <Text fontSize={{ base: '18px', md: 54 }} fontFamily='"Montserrat", Sans-serif;'
                        fontWeight='600' >One-Stop Marketplace For Collecting & Trading Extraordinary NFTs
                    </Text>
                    <HStack spacing={4}>

                        <InputGroup>

                            <Input
                                w={{ base: '80%', md: '50%' }}
                                type='text'
                                placeholder='Enter search keyword'
                                borderTop='1px solid black'
                                borderLeft='1px solid black'
                                fontFamily='"Montserrat", Sans-serif;'
                                lineHeight='22px'
                                fontWeight={400}
                                fontSize='16px'
                                p={6}
                                border={"0"}
                            />
                            <InputRightAddon p={0} children={<Button
                                p={6}
                                bg='#000'
                                color='#fff'
                                mt='10px'
                                borderRight='1px solid #E0FF66'
                                borderBottom='1px solid #E0FF66'
                                borderTop='0px solid #E0FF66'
                                borderLeft='0px solid #E0FF66'
                                borderTopLeftRadius={0}
                                borderBottomLeftRadius='0'
                                fontFamily='"Montserrat", Sans-serif;'
                                _hover={{
                                    bg: '#E0FF66',
                                    color: 'black',
                                   
                                }}
                            >Search</Button>} />
                        </InputGroup>
                    </HStack>
                </Box>

                <Box
                    bg='#000'
                    h='100%'
                    w={{ base: '100%', md: '30%' }}
                    align='center'
                >
                    <Box zIndex={2} transform={{ base: 0, md: 'auto' }} translateX={{ base: '0', md: -150 }}>
                        {/* <Image boxSize='60px'src='/images/pics.png' alt='Image' mt={{base:'0', md:'80px' }}  /> */}
                        <Box h='250px' w='80%' mt={12} backgroundImage='/images/pics.png' backgroundSize='cover'></Box>
                        <Box
                            color='white'
                            bg='#E0FF66'
                            mt='0 !important'
                            w='80%'
                        >
                            <Flex gap={3} textAlign='left' direction='column' p={4}>
                                <Heading size='xs'
                                    fontSize='18px'
                                    color='black'
                                    fontFamily='"Montserrat", Sans-serif;'

                                >
                                    WALK IN NATURE
                                </Heading>
                                <Text
                                    fontFamily='"Montserrat", Sans-serif;'
                                    fontSize='11px'
                                    color='#9AB922'
                                >Artist: John Doe</Text>

                                <Text
                                    fontFamily='"Montserrat", Sans-serif;'
                                    fontSize='24px'
                                    color='#000000'
                                   fontWeight='600'
                                >2.00 ETH
                                </Text>
                            </Flex>

                            <HStack
                                p='0px 10px 8px'>
                                <Button

                                    variant='outline'
                                    color='#000'
                                    border='1px solid black'
                                    fontFamily='"Montserrat", Sans-serif;'
                                    padding='15px'
                                    fontSize='12px'
                                    bg='transparent'
                                    _hover={{
                                        bg: '#000', color: 'white'

                                    }}


                                >VIEW ARTWORK</Button>

                                <Button

                                    bg='#000'
                                    color='#fff'
                                    border='1px solid black'
                                    fontFamily='"Montserrat", Sans-serif;'
                                    fontSize='13px'
                                    padding='15px'
                                    _hover={{
                                        bg: '#E0FF66', color: 'black'

                                    }}


                                >PLACE A BID</Button>
                            </HStack>

                        </Box>
                    </Box>


                </Box>
            </Stack>

            <Box
                px={{ base: 5, md: 40 }}
                py={{ base: 10, md: 15 }}

            >
                <Text
                    fontWeight='600'
                    fontfamily='"Montserrat", Sans-serif;'
                    fontSize={{ base: '25px', md: '56px' }}
                    line-height='60px'
                    color='#000'
                    align='center'

                >Featured Artwork</Text>
            </Box>

            <Flex direction={{ base: 'column', md: 'row' }} gap={8} w='100%' px={{ base: 4, md: 12 }} >

                {response && response.map((card, i) => (
                    <Box key={i}>
                        <Feature
                            title={card.name}
                            artist={card.author}
                            amount='2.00'
                            bgcolor='#E0FF66'
                            textcolor='#9AB922'
                            btnbg='#E0FF66'
                            image={card.image}
                        />
                    </Box>))}


            </Flex>

            <Text
                fontWeight='600'
                fontfamily='"Montserrat", Sans-serif;'
                fontSize={{ base: '25px', md: '56px' }}
                line-height='60px'
                color='#000'
                mb='40px'
                pt='100px'
                align={'center'}
            >Top Sellers</Text>
            <SimpleGrid columns={['1', null, '4']} spacing={4} px={{ base: '12px', md: '45px' }} >
                {res && res.map((sells, i) => (

                    <Box key={i}>

                        <Sellers
                            picture={sells.image}
                            names={sells.name}
                            price={sells.amount}
                        />

                    </Box>
                ))}

            </SimpleGrid>


            <Text
                fontWeight='600'
                fontfamily='"Montserrat", Sans-serif;'
                fontSize={{ base: '25px', md: '56px' }}
                line-height='60px'
                color='#000'
                mt={{ base: '30px', md: '120px' }}
                textAlign='center'
                py={4}
            >Popular Collections</Text>

            <SimpleGrid columns={[1, null, 4]} spacing={{ base: 8, md: 14 }} >
                {responses && responses.map((cards, i) => (
                    <Box key={i}>
                        <Collections
                            Fimage={cards.fimage}
                            simage={cards.Simage}
                            titles={cards.title}
                            names={cards.name}
                        />
                    </Box>

                ))}
            </SimpleGrid>

            <Letter />


            <Footer />
        </Box>
    )
}
