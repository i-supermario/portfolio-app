import { Flex, Link } from "@chakra-ui/react";

const flexStyle = {
    minWidth:"100%", 
    justifyContent:"flex-start",
    columnGap:"20px",
    padding: "7",
    position:"fixed",
    bottom:"0",
    backgroundColor: "gray.800",
    color: "white"
    
}

export default function Footer(){
    return(
        <>
            <Flex sx={flexStyle}>
                <Link href="https://github.com/i-supermario" isExternal>
                    github
                </Link>
                <Link href="https://www.linkedin.com/in/sarang-nikhare/" isExternal>
                    linkedin
                </Link>
            </Flex>
        </>
    )
}