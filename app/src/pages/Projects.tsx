import { Container, Text } from "@chakra-ui/react";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const containerStyle = {
    padding: "0 0 0 0",
    minWidth: "1440px",
    zIndex: "0",
    display: "flex",
    flexDirection: "column",
  }

const innerContainerStyle = {
    minWidth:"100%",
    backgroundColor:"blackAlpha.900",
    color:"beige", 
    padding:"120px 150px 0 150px",  //padding added to position content visiblity
    overflowX:"auto"

}

export default function Projects(){
    return(
        <>
            <Container sx={containerStyle}>
                <Footer/>
                <Container sx={innerContainerStyle}>
                    <Text as="samp" fontSize="7xl" >projects</Text>
                    <Projects/>
                </Container>
                <Header/>
            </Container>
        </>
    )
}