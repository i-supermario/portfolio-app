import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import ProfilePic from "../assets/pp.jpg"


export default function Intro(){
    return(
        <>
            <Flex direction={{base: 'column-reverse', md: 'row'}} columnGap="30" justifyContent="space-between" >
                <Box>
                    <Text fontSize="7xl" >Hello, I am Sarang Nikhare.</Text>
                    <Text fontSize="3xl">An ever-learning <Text as="em">almost</Text> Software Developer, hailing from the city of Pune, India.</Text>
                    <Text fontSize="xl" >Welcome to my fairly decent website, not everything is perfect here, but again, which software is 🫠 </Text>
                </Box>
                <Box>
                    <Avatar height="auto" width="80" src={ProfilePic}/>
                </Box>
            </Flex>
        </>
    )
}