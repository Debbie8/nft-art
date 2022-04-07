import { Box, Image,Stack, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Box w='100%'>
            <Stack direction={['column', 'row']} bg='#000' h='90px' px={{base:8, md:15}} alignItems='center'>
                <Image src='/images/debb (3).png' alt='Image' boxSize='100px' ml='29px' />
                <Spacer />
                <Box color='#fff'>&copy;  COPYRIGHT 2022 POWERED BY WPDEVELOPER</Box>
            </Stack>
        </Box>
  )
}
