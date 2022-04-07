import { Box, Button, Input, Stack, VStack, Text, Flex, HStack, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React from 'react'

export default function Letter() {
    return (
        <VStack mt={{ base: '40px', md: '160px' }} textAlign='center' w='100%' px={{ base: 4, md: 12 }} py={{ base: 4, md: 12 }}>
            <Box
                borderTop='1px solid black'
                borderLeft='1px solid black'
                borderRight='1px solid black'

                w='100%'
                px={4}

            >
                <Flex gap={8} direction={{ base: 'column', md: 'column' }} py={8}>
                    <Text
                        fontWeight='640'
                        fontfamily='"Montserrat", Sans-serif;'
                        fontSize={{ base: '25px', md: '60px' }}
                        line-height='60px'
                        color='#000'
                    >Newsletter</Text>

                    <Text
                        fontfamily='"Montserrat", Sans-serif;'
                        fontSize='17px'
                        color='#000'
                    >Stay On Top Of The Loop With All The Latest Updates</Text>
                </Flex>
                

                    <HStack justifyContent='center'>
                    <Stack direction={['column', 'row']} gap={8} w='70%' >
                        <InputGroup>

                            <Input
                                w={{ base: '60%', md: '50%' }}
                                type='text'
                                placeholder='Enter your Email'
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
                            >subscribe</Button>} />
                        </InputGroup>
                        </Stack>
                    </HStack>
                
            </Box>
        </VStack>
    )
}
