import { Box, Stack, Text, Flex, Input, Textarea, Button} from '@chakra-ui/react'
import React from 'react'

export default function Contact() {
  return (
    <Stack direction='column' align='center' py={8}>
      <Box w='50%' align='center' spacing={4}>
          <Text as='h1' py={4} fontWeight='700' fontSize='24px' color='#303030'>Contact Us</Text>
          <Flex direction='column' w='100%' gap={5}>
            <Input placeholder='Name' />
            <Input placeholder='Email' />
            <Input placeholder='Subject' />
            <Textarea placeholder='Message' />
          </Flex>
          <Button variant='solid' mt='25px' bg='#fed600'>Submit</Button>
        </Box>
    </Stack>
  )
}
