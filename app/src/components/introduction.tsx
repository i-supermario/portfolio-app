import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import ProfilePic from "../assets/pp.jpg"


export default function Intro(){
    return(
        <>
            <Flex direction={{base: 'column-reverse', md: 'row'}} columnGap="30" justifyContent="space-between" >
                <Box>
                    <Text fontSize="6xl" >Hey! I am Sarang Nikhare.</Text>
                    <Text fontSize="3xl">An ever-learning Software Developer, hailing from the city of Pune, India.</Text>
                    <Text fontSize="xl" >Welcome to my website! </Text>
                </Box>
                <Box>
                    <Avatar height="auto" width="80" src={ProfilePic}/>
                </Box>
            </Flex>
        </>
    )
}