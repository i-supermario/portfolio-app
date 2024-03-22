import { Container, Divider, Text } from "@chakra-ui/react";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import ProjectList from "../components/projectlist";


export default function Projects(){
    return(
        <>
            <Container minWidth={"100vw"} padding={{base:'0'}}>
                <Header/>
                <Container minWidth={"100vw"} padding={{base:'120px 20px 0 20px',sm:'120px 150px 0 150px'}} color="beige" backgroundColor="blackAlpha.900">
                    <Text as="samp" fontSize="7xl" >projects</Text>
                    <Divider orientation="horizontal"/>
                    <ProjectList/>
                </Container>
                <Footer/>
            </Container>
        </>
    )
}