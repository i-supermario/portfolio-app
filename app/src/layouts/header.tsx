import { Button, Container, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from "@chakra-ui/react";
import Logo from "../assets/logo.jpg"
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";


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

Menu

export default function Header(){

    const size = useMediaQuery('(min-width: 500px)')
    console.log(size)

    return(
        <>
            <Container sx={containerStyle}>
                <Image src={Logo} boxSize="10" borderRadius="50"/>
                {
                    size[0] ? 
                    <>
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
                    </>
                    :
                    <>
                        <Menu>
                            <MenuButton sx={{border:"0"}}  >
                                <HamburgerIcon/>
                            </MenuButton>
                            <MenuList  >
                                <MenuItem>
                                    <Link to={"/"} >
                                        <Text as="b" fontSize="2xl">home</Text>
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to={"/projects"}>
                                        <Text as="b" fontSize="2xl">projects</Text>
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Text as="b" fontSize="2xl">music</Text>
                                </MenuItem>
                                <MenuItem>
                                    <Text as="b" fontSize="2xl">gallery</Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </>
                }
            </Container>
        </>
    )
}