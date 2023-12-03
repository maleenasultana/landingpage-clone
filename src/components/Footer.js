import React from "react";
import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Flex,
  Image,
} from "@chakra-ui/react";
import social from "../components/Images/social.png";
import logo from "../components/Images/Group 4.png";
const Logo = (props) => {
  return (
    <>
      <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
        <img src={logo} alt="..." className="logo" />
        <Text
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          fontSize={"large"}
          fontWeight={"700"}
          color={useColorModeValue("gray.900", "white")}
        >
          Milton
        </Text>
      </Flex>
    </>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10} marginLeft={"120px"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"md"}>
              A short text explaining why my startup is so cool
              <br />© My super start-up
            </Text>
            <Image src={social} width="200px" height="80px" alt="" />
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            
            <Box as="a" href={"#"}>
              Features
            </Box>
            <Box as="a" href={"#"}>
              Testimonials
            </Box>
            <Box as="a" href={"#"}>
              Pricing
            </Box>
            <Box as="a" href={"#"}>
              FAQs
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Resources</ListHeader>
            <Box as="a" href={"#"}>
              Change Log
            </Box>
            <Box as="a" href={"#"}>
            Help Center
            </Box>
            <Box as="a" href={"#"}>
              Blog
            </Box>
            <Box as="a" href={"#"}>
              Contact
            </Box>
           
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Others</ListHeader>
            <Box as="a" href={"#"}>
              Privacy
            </Box>
            <Box as="a" href={"#"}>
              Terms 
            </Box>
            <Box as="a" href={"#"}>
           Affiliation
            </Box>
            <Box as="a" href={"#"}>
              Press
            </Box>
            
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>From the blog</ListHeader>
            <Box as="a" href={"#"}>
           <Text fontSize={'sm'} fontWeight={'500'}>Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</Text> 
            </Box>
            <Box as="a" href={"#"}>
            <Text fontSize={'sm'}fontWeight={'500'}>Organizing Your Calendar for Enhanced Productivity and Focus</Text> 
            </Box>
            <Box as="a" href={"#"}>
            <Text fontSize={'sm'}fontWeight={'500'}>The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</Text> 
            </Box>
            <Box as="a" href={"#"}>
            <Text fontSize={'sm'}fontWeight={'500'}>Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</Text>
            </Box>
            
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        position="fixed"
        bottom={"80px"}
        right={"100px"}
        width={"80px"}
        height={"80px"}
      >
        <Button
          fontSize={"xs"}
          bg={"gray.100"}
          marginBottom={"3px"}
          padding={"10px"}
          borderRadius={"10px"}
        >
          Buy this template for $49
        </Button>
        <Button
          fontSize={"xs"}
          bg={"gray.100"}
          marginBottom={"3px"}
          padding={"10px"}
          borderRadius={"10px"}
        >
          <img
            src="https://th.bing.com/th/id/OIP.vfr7vMEy4UnecRg_HEg3tgHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7"
            alt="..."
            width={"20px"}
            height={"20px"}
          />
          Framer
        </Button>
      </Box>
    </Box>
  );
}
