
import { Box, Stack,Image, Flex, Heading, Text, Button, Container, Icon, useColorModeValue } from '@chakra-ui/react';
import { FcAbout, FcAssistant, FcCollaboration, FcDonate, FcManager } from 'react-icons/fc';
import React from 'react';
import image1 from "../components/Images/calander.png"
import image2 from "../components/Images/image2.png"



const Card = ({ heading, description,icon}) => {
  return (
    <Box marginTop={"50px"} maxW={{ base: 'full', md: '275px' }} w="full"  borderRadius="lg" overflow="hidden" p={5}>
      <Stack align="start" spacing={2}>
        <Flex
          w={'full'}
          h={'250px'}
          align="center"
          justify="center"
          color="white"
          // borderRadius={'20px'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          <Image width="full" src={image1} />
        </Flex>
        <Box mt={2}>
          <Heading size="md" bg={"blue.100"} borderRadius={'20px'} margin={'20px'} padding={'5px'} fontSize={'sm'}>{heading}</Heading>
          <Text mt={1} fontSize="sm">
            {description}
          </Text>
        </Box>
        {/* <Button variant="link" colorScheme="blue.100" size="sm">
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

const GridListWith = () => {
  return (
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
        And so much more... 💼
      </Button>

      <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="bold">
          Our features to make your life easier
        </Heading>
      </Stack>

      <Container maxW="5xl" mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {Card({
            heading: 'Card-Device Sync',
            icon: <Icon as={image1} w={10} h={10} />,
            description: 'Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.',
            href: '#',
          })}
          {Card({
            heading: 'Auto Event Import',
            icon: <Icon as={image2} w={10} h={10} />,
            description: 'Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.',
            href: '#',
          })}
          {Card({
            heading: 'Task Delegation',
            icon: <Icon as={FcDonate} w={10} h={10} />,
            description: 'Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.',
            href: '#',
          })}
          {Card({
            heading: 'Voice Command Integration',
            icon: <Icon as={FcManager} w={10} h={10} />,
            description: 'Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants.',
            href: '#',
          })}
          {Card({
            heading: 'Customizable Alerts',
            icon: <Icon as={FcAbout} w={10} h={10} />,
            description: 'Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed.',
            href: '#',
          })}
          {Card({
            heading: 'Privacy Protection',
            icon: <Icon as={FcAbout} w={10} h={10} />,
            description: 'Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.',
            href: '#',
          })}
        </Flex>
      </Container>
    </Box>
  );
};

export default GridListWith;
