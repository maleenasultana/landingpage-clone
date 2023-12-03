'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Box,
  Button,
  Stack,
  Heading,
} from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons'

export default function SimpleAccordion() {
  return (
    <>
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
       Relevant stuff, bla bla 📣
      </Button>

      <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="bold">
        Frequently asked questions
        </Heading>
      </Stack>
    </Box>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      marginBlock={'2'}>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg" >
          <AccordionItem >
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Can I cancel my subscrition?</Text>
              <AddIcon fontSize="14px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Can I cancel my subscrition?.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">What happens when my trial ends?</Text>
              <AddIcon fontSize="14px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.


              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">What payment methods do you offer?</Text>
              <AddIcon fontSize="14px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express, and Discover), PayPal, and bank transfers.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">What is your refund policy?</Text>
              <AddIcon fontSize="14px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a full refund within 30 days of your initial purchase. To initiate the refund process, please contact our support team through the "Help" section in your account or email us at support@Milton.com, and we'll be happy to assist you.


              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Do you offer discounts to educational institutions ?</Text>
              <AddIcon fontSize="14px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. Please reach out to our sales team at sales@Milton.com with your institution's details, and we will provide you with more information on our exclusive educational pricing options.


              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
     </>
  )
}