import { Box, Card, CardBody, CardHeader, Container, Divider, Flex, Image, Link, List, ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import Header from '../layouts/header'
import Footer from "../layouts/footer"
import ProfilePic from "../assets/pp.jpg"
const containerStyle = {
  padding: "0 0 0 0",
  minWidth: "1423px",
  zIndex: "0",
  display: "flex",
  flexDirection: "column",
}

export default function App() {
  return (
    <>
      <Container sx={containerStyle} >
        <Header />
        <Container minWidth="100%" backgroundColor="blackAlpha.900" color="beige" 
        padding="120px 150px 0 150px"  //padding added to position content visiblity
        overflowX="auto"
        >
          <Flex  columnGap="30" justifyContent="space-between" >
            <Box>
              <Text fontSize="7xl" >Hi, I am Sarang.</Text>
              <Text fontSize="3xl">An ever-learning <Text as="em">almost</Text> Full-stack Developer from Pune.</Text>
            </Box>
            <Box>
              <Image height="auto" width="40" borderRadius="100" src={ProfilePic} alt="pixeleted version of how i wish i looked"/>
            </Box>
          </Flex>
          <br/>
          <br/>
          <br/>
          <br/>
          <Box boxSize="sm" display="flex" flexDirection="column" rowGap="10px">
            <Text as="samp" >a little about me  </Text>
            <Divider />
            <UnorderedList variant="">
              <ListItem>
                <Text as="samp" > Currently pursuing my MS in Computer Science at University of Southern California </Text>
              </ListItem>
              <ListItem>
                <Text as="samp" > Open for internship opportunities, you can find my resume <Link href="https://drive.google.com/file/d/1jGaHFFQQcvXQXZ8wMSQncQZ8gXjjBrlX/view?usp=sharing" color="yellow.600" isExternal >here</Link> </Text>
              </ListItem>
            </UnorderedList>
          </Box>
          
        </Container>
        <Footer />
      </Container>
    </>
  )
}
