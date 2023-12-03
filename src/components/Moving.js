import { Box, Button, Heading, Stack, Container, HStack } from '@chakra-ui/react'
import React from 'react'

const Moving = () => {
  return (
   <>
   {/* ............................................................ */}
        <Box p={4}>
      <Button
        color="gray.600"
        fontSize={{ base: 'sm', sm: 'lg' }}
        bg="blue.100"
        rounded="full"
        bgSize="200px"
        _hover={{
          bg: 'blue.100',
        }}
        align="center"
        justify="center"
        marginLeft="40%"
        marginTop={"100px"}
      >
        They already love our products 😍
      </Button>

      <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="bold">
        See what our users say about us
        </Heading>
      </Stack>
    </Box>
    {/* ....................................................................... */}
    
    </>
  )
}

export default Moving