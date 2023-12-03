'use client';

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Switch,
  Badge,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper(props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
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
        marginLeft="5%"
        marginTop={"100px"}
      >
       Pricing and plans 💰
      </Button>
        <Heading as="h1" fontSize="4xl">
        Find the best plan for your needs
        </Heading>
       <Switch Monthly={'On'}></Switch>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
          <Badge size={'lg'} bg={'gray.100'} borderRadius={'20px'}>Free</Badge>
            <Text fontWeight="500" fontSize="2xl">
              Hobby
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                0
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
            <Text>Forever free</Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <Box w="80%" pt={7}>
              <Button w="full" bg="black" color='white'  >
                Start trial
              </Button>
            </Box>
            
            <List spacing={3} textAlign="start" px={12}>
                <Text fontWeight='700' >What's included:</Text>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                A cool feature
              </ListItem>
              
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               A basic Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                A top feature with limitations
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                An incredible feature so useful
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                A top feature 
              </ListItem>
              
            </List>
            
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('black', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('white', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
               Best deal 🔥
              </Text>
            </Box>
            <Box py={4} px={12}>
                <Badge size={'lg'} bg={'red.100'} borderRadius={'20px'}>Starter</Badge>
              <Text fontWeight="500" fontSize="2xl">
                Growth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  19
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
              <Text>Billed monthly</Text>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            > 
            <Box w="80%" pt={7}>
                <Button w="full" bg="black" color='white'>
                  Start trial
                </Button>
              </Box>
              <List spacing={3} textAlign="start" px={12}>
                <Text fontWeight='700' >What's included:</Text>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                A cool feature
              </ListItem>
              
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               A basic Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                A top feature with limitations
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                An incredible feature so useful
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                A cool feature 
              </ListItem>
              
            </List>
             
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
          <Badge size={'lg'} bg={'orange.200'} borderRadius={'20px'}>Pro</Badge>
            <Text fontWeight="500" fontSize="2xl">
              Scale
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                49
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
              
            </HStack>
            <Text>Billed monthly</Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
             <Box w="80%" pt={7}>
                <Button w="full" bg="black" color='white'>
                  Start trial
                </Button>
              </Box>
              <List spacing={3} textAlign="start" px={12}>
                <Text fontWeight='700' >What's included:</Text>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                A cool feature
              </ListItem>
              
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               A basic Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                A top feature with limitations
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                An incredible feature so useful
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                A premier feature 
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                You need this feature 
              </ListItem>
              
            </List>
            
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
