import { Container, Flex, Link, Text } from "@chakra-ui/react";

const flexStyle = {
    minWidth:"100%", 
    justifyContent:"space-between",
    // columnGap:"20px",
    // padding: "7",
    position:"fixed",
    bottom:"0",
    backgroundColor: "gray.800",
    color: "white"
    
}

export default function Footer(){
    return(
        <>
            <Flex sx={flexStyle}>
                <Container display="flex" padding="7" columnGap="10" margin="0">
                    <Link href="https://github.com/i-supermario" isExternal>
                        github
                    </Link>
                    <Link href="https://www.linkedin.com/in/sarang-nikhare/" isExternal>
                        linkedin
                    </Link>
                </Container>
                <Container display="flex" justifyContent="right" margin="0" padding="7">
                    <Text as="samp" width="fit-content" noOfLines={1}>Built using Vite, React, TypeScript, Chakra-UI</Text>
                </Container>
            </Flex>
        </>
    )
}