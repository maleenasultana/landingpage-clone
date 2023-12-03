import React from 'react'
import { Image,Box,Flex } from '@chakra-ui/react'
import dashboard from "../components/Images/dashboard.png"
const Dashboard = () => {
  return (
   
         
    <Box
     boxSize='1050px'
    marginLeft={'10%'}
  >
    <Flex >
  <Image src={dashboard} alt='Dashboard'direction={{ base: "md", md: "xl" }} justifyItems={'stretch'} width={'100%'} height={'700'}/>
</Flex>
</Box>


  )
}

export default Dashboard