import { Box, Button,Text, Heading, Stack, Container,WrapItem,Card,CardBody,Avatar} from '@chakra-ui/react'
import React from 'react'

const Lastcall = () => {
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
        marginLeft="42%"
        marginTop={"100px"}
      >
       Last call Baby !   🚀
      </Button>

      <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="bold">
        Ready to start?
        </Heading>
        <Text
            color={"gray.700"}
            fontSize={{ base: "xl", sm: "4xl", md: "2xl" }}
            className="floating"
          >
            Here you should explain how cool your app is. Remember,
            <br />
            focus on the benefits for your users, not on the features.
          </Text>
          <WrapItem>
      <Button marginLeft={'38%'} bg="black" color='white'>Get started it's free</Button>
    </WrapItem>
    <Card
                width={"300px"}
                height={"100px"}
                fontSize={"sm"}
                borderRadius={"20px"}
                bgColor={"orange.300"}
                color={"black"}
                marginLeft={"180px"}
                marginTop={"20px"}
              >
                <CardBody>
                  <Text>
                    I've recommended this app to all my friends and colleagues!
                    <Text>Karl, CTO of a cool startup</Text>
                  </Text>
                </CardBody>
              </Card>
              <Avatar marginLeft="140px" src="https://bit.ly/code-beast" />
      </Stack>
    </Box>
    {/* ....................................................................... */}
    
    </>
  )
}

export default Lastcall