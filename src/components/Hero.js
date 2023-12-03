"use client";

import { HStack } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Avatar,  AvatarGroup } from "@chakra-ui/react";
export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"4xl"} marginTop={'10px'}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: "10", md: "16" }}
        >
          <Box>
            <Button
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Image
                src=""
                width="100px"
                position={"absolute"}
                right={71}
                top={"20px"}
                _hover={{
                  shadow: "md",
                  transform: "translateY(-5px)",
                  transitionDuration: "0.2s",
                  transitionTimingFunction: "ease-in-out",
                }}
              />
            </Button>
          </Box>

          <br />
          <Box>
            <Text
              as={"span"}
              bgColor={"lightblue.200"}
              bgClip={"text"}
              color={"black"}
              fontSize={{ base: "xs", sm: "sm", md: "md" }}
              fontWeight={"500"}
              bg={"gray.100"}
              margin-bottom={"5px"}
              borderRadius={"15px"}
              bgSize={"400px"}
              padding={"3px"}
            >
              An other way to manage time
            </Text>
            <Heading>
              <Text
                as={"span"}
                bgColor={"lightblue.200"}
                bgClip={"text"}
                color={"black"}
                fontSize={{ base: "4xl", sm: "6xl", md: "7xl" }}
                margin-top={"2px"}
              >
                Your new favorite Calender 🗓️ app
              </Text>
            </Heading>
          </Box>
          <Text
            color={"gray.700"}
            fontSize={{ base: "xl", sm: "4xl", md: "2xl" }}
            className="floating"
          >
            Here you should explain how cool your app is. Remember,
            <br />
            focus on the benefits for your users, not on the features.
          </Text>

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"black"}
              bg={"black"}
              size={"lg"}
              px={6}
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.3s ease-in-out",
                bg: "black",
              }}
            >
              <a href="">Get Started It's Free</a>
            </Button>
            <Text
              as={"span"}
              bgClip={"text"}
              color={"black"}
              fontSize={{ base: "xs", sm: "md", md: "xs" }}
              fontWeight={"300"}
              margin-bottom={"2px"}
            >
              Free 14 days trials,no credit card needed
            </Text>
           
            <Box>
              <HStack>
                <AvatarGroup
                  size="md"
                  _hover={{
                    color:"black",
                    transform: "translateY(-5px)",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                >
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>
                <Text> ⭐⭐⭐⭐⭐5.0
                  <br/><Text fontSize={'sm'} bgColor={'gray.300'}>From 200+ happy users</Text>
                </Text>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}


