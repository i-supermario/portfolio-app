import { Container, Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.jpg"
import { Link } from "react-router-dom";

const containerStyle = {
    minWidth: "100%",
    display:"flex",
    justifyContent:"space-between",
    padding: "7",
    position:"fixed",
    zIndex:"1",
    top:"0",
    margin:"0",
    backgroundColor: "green.800"
    
}

export default function Header(){
    return(
        <>
            <Container sx={containerStyle}>
                <Image src={Logo} boxSize="10" borderRadius="50"/>
                <Flex justifyContent="flex-end" minWidth="80%" columnGap="20px">
                    <Link to={"/"} >
                        <Text as="b" fontSize="2xl">home</Text>
                    </Link>
                    <Link to={"/projects"}>
                        <Text as="b" fontSize="2xl">projects</Text>
                    </Link>
                    <Text as="b" fontSize="2xl">music</Text>
                    <Text as="b" fontSize="2xl">gallery</Text>
                </Flex>
            </Container>
        </>
    )
}