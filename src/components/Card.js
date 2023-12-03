"use client";

import {
  Button,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";

import cardImage from "../components/Images/cardImage.png";
import a from "../components/Images/a.png";
import Annie from "../components/Images/OIP.jpg";
import graph from "../components/Images/graph.png";
import b from "../components/Images/b.png";
export default function SplitScreen() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 0, md: 0 }}
        py={{ base: "5", md: "10" }}
      >
        <Box>
          <Text
            as={"span"}
            bgColor={"lightblue.200"}
            bgClip={"text"}
            color={"black"}
            fontSize={{ base: "xs", sm: "sm", md: "md" }}
            fontWeight={"500"}
            bg={"gray.100"}
            borderRadius={"15px"}
            bgSize={"400px"}
            padding={"3px"}
          >
            Our main features 🦸🏼
          </Text>
        </Box>

        <br />
        <Box>
          <Heading>
            <Text
              as={"span"}
              bgColor={"lightblue.200"}
              bgClip={"text"}
              color={"black"}
              fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
              marginTop={"0px"}
            >
              Discover your new superpowers
            </Text>
          </Heading>
        </Box>
      </Stack>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        marginTop={"60px"}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={1} w={"full"} maxW={"lg"}>
            <Stack direction={{ base: "column", md: "row" }} spacing={1}>
              <Button
                rounded={"full"}
                bg={"orange.100"}
                color={"black"}
                _hover={{
                  bg: "orange.200",
                }}
              >
                Seamless Scheduling
              </Button>
            </Stack>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <br />{" "}
              <Text color={"black"} as={"span"}>
                Focus on what matters most for you
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "lg", lg: "xl" }} color={"gray.500"}>
              Effortlessly plan your day with our intuitive drag-and-drop
              interface. Sync with multiple calendar platforms, import events
              from emails, and add participants with just a few clicks.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            width={"500px"}
            height={"550px"}
            src={cardImage}
            marginTop={"150px"}
            marginLeft={"20px"}
          />
        </Flex>
      </Stack>

      {/* 2nd section ..................................................*/}

      <Box boxSize={"100px"}></Box>

      <Box
        _hover={{
          transform: "translateY(-5px)",
          transitionDuration: "0.2s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
          <Flex flex={2}>
            <Image
              alt={"Login Image"}
              width={"500px"}
              height={"550px"}
              src={a}
              marginTop={"150px"}
              marginLeft={"120px"}
            />
          </Flex>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={1} w={"full"} maxW={"lg"}>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={1}
                marginRight={"40px"}
              >
                <Button
                  rounded={"full"}
                  bg={"blue.200"}
                  color={"black"}
                  _hover={{
                    bg: "blue.100",
                  }}
                >
                  Smart Reminders & Task
                </Button>
              </Stack>
              <Heading fontSize={{ base: "2xl", md: "5xl", lg: "4xl" }}>
                <br />{" "}
                <Text color={"black"} as={"span"}>
                  Never miss an important deadline or event again
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "lg", lg: "xl" }} color={"gray.500"}>
                Smart Reminders & Task Never miss an important deadline or event
                again Never miss an important deadline again with our AI-driven
                notifications. Our app intelligently analyzes your schedule to
                prioritize what's most important, keeping you on track and
                ensuring your day is productive and stress-free.
              </Text>

              <Card
                width={"300px"}
                height={"140px"}
                fontSize={"sm"}
                borderRadius={"20px"}
                bgColor={"black"}
                color={"white"}
                marginLeft={"30px"}
                marginTop={"20px"}
              >
                <CardBody>
                  <Text>
                    I love how user-friendly this app is! It's so easy to add
                    events and set reminders!
                    <Text>Adam, entrepreneur</Text>
                  </Text>
                </CardBody>
              </Card>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            </Stack>
          </Flex>
        </Stack>
      </Box>

      {/* 3rd section...................................................... */}

      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        marginTop={"60px"}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={1} w={"full"} maxW={"lg"}>
            <Stack direction={{ base: "column", md: "row" }} spacing={1}>
              <Button
                rounded={"full"}
                bg={"green.100"}
                color={"black"}
                _hover={{
                  bg: "green.200",
                }}
              >
                Seamless Scheduling
              </Button>
            </Stack>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <br />{" "}
              <Text color={"black"} as={"span"}>
                Focus on what matters most for you
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "lg", lg: "xl" }} color={"gray.500"}>
              Effortlessly plan your day with our intuitive drag-and-drop
              interface. Sync with multiple calendar platforms, import events
              from emails, and add participants with just a few clicks.
            </Text>
            <Card
              width={"300px"}
              height={"100px"}
              fontSize={"sm"}
              borderRadius={"20px"}
              bgColor={"black"}
              color={"white"}
              marginLeft={"30px"}
              marginTop={"30px"}
            >
              <CardBody>
                <Text>
                  I've tried a lot of calendar apps, but this one is by far the
                  best! It's so intuitive and customizable, and it has all the
                  features I need.
                  <Text>Annie, Designer</Text>
                </Text>
              </CardBody>
            </Card>
            <Avatar name="Annie" src={Annie} />
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            width={"400px"}
            height={"450px"}
            src={graph}
            marginBottom={"50px"}
            marginTop={"80px"}
            marginLeft={"20px"}
          />
        </Flex>
      </Stack>

      {/* 4 card .............................................................. */}

      <Box boxSize={"100px"}></Box>

      <Box
        _hover={{
          transform: "translateY(-5px)",
          transitionDuration: "0.2s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
          <Flex flex={2}>
            <Image
              alt={"Login Image"}
              width={"500px"}
              height={"550px"}
              src={b}
              marginTop={"150px"}
              marginLeft={"120px"}
            />
          </Flex>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={1} w={"full"} maxW={"lg"}>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={1}
                marginRight={"40px"}
              >
                <Button
                  rounded={"full"}
                  bg={"pink.100"}
                  color={"black"}
                  _hover={{
                    bg: "pink.50",
                  }}
                >
                  Smart Reminders & Task
                </Button>
              </Stack>
              <Heading fontSize={{ base: "2xl", md: "5xl", lg: "4xl" }}>
                <br />{" "}
                <Text color={"black"} as={"span"}>
                  Never miss an important deadline or event again
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Smart Reminders & Task Never miss an important deadline or event
                again Never miss an important deadline again with our AI-driven
                notifications. Our app intelligently analyzes your schedule to
                prioritize what's most important, keeping you on track and
                ensuring your day is productive and stress-free.
              </Text>

              <Card
                width={"300px"}
                height={"100px"}
                fontSize={"sm"}
                borderRadius={"20px"}
                bgColor={"black"}
                color={"white"}
                marginLeft={"30px"}
                marginTop={"20px"}
              >
                <CardBody>
                  <Text>
                    I've recommended this app to all my friends and colleagues!
                    <Text>Karl, CTO of a cool startup</Text>
                  </Text>
                </CardBody>
              </Card>
              <Avatar src="https://bit.ly/code-beast" />
            </Stack>
          </Flex>
        </Stack>
      </Box>
      {/* ............................................. */}

      {/* <Box width={"full"} height={"300px"} marginTop={"100px"} marginLeft={'80px'}>
        <Stack spacing={1} w={"1000px"} maxW={"full"}>
          <Box align={"center"} justify={"center"} marginBottom={"30px"}>
            <Button
              rounded={"full"}
              bg={"blue.50"}
              color={"black"}
              _hover={{
                bg: "blue.100",
              }}
              marginBottom={'0px'}
            >
              And so much more... 💼
            </Button>
          </Box>
          <Box align={"center"} justify={"center"}>
            <Heading fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} marginTop={'0px'}>
              <br />{" "}
              <Text color={"black"} as={"span"}>
                Our features to make your life easier
              </Text>{" "}
            </Heading>
          </Box>
        </Stack>
      </Box> */}
    </>
  );
}
