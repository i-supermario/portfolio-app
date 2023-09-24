import { Container, Divider, Text } from "@chakra-ui/react";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import ProjectList from "../components/projectlist";

const containerStyle = {
    padding: "0 0 0 0",
    minWidth: "100vw",
    zIndex: "0",
    display: "flex",
    flexDirection: "column",
  }

const innerContainerStyle = {
    minWidth:"100%",
    backgroundColor:"blackAlpha.900",
    color:"beige", 
    padding:"120px 150px 0 150px",  //padding added to position content visiblity
    overflowX:"auto",
    display:"flex",
    flexDirection:"column",
    rowGap:"5px"

}

export default function Projects(){
    return(
        <>
            <Container sx={containerStyle}>
                <Header/>
                <Container sx={innerContainerStyle}>
                    <Text as="samp" fontSize="7xl" >projects</Text>
                    <Divider orientation="horizontal"/>
                    <ProjectList/>
                </Container>
                <Footer/>
            </Container>
        </>
    )
}