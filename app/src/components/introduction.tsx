import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import ProfilePic from "../assets/pp.jpg"


export default function Intro(){
    return(
        <>
            <Flex  columnGap="30" justifyContent="space-between" >
                <Box>
                    <Text fontSize="7xl" >Hello, I am Sarang.</Text>
                    <Text fontSize="3xl">An ever-learning <Text as="em">almost</Text> Full-stack Developer, hailing from city of Pune in India</Text>
                </Box>
                <Box>
                    <Avatar height="auto" width="40"  src={ProfilePic}/>
                </Box>
          </Flex>
        </>
    )
}