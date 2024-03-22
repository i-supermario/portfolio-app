import { Container } from "@chakra-ui/react"
import Header from '../layouts/header'
import Footer from "../layouts/footer"
import About from "../components/about"
import Intro from "../components/introduction"
import Upcoming from "../components/upcoming"
import ExperienceList from "../components/experiencelist"

export default function App() {
  return (
    <>
      <Container 
        minWidth={"100vw"}
        padding={"0"} 
      >
        <Header />
        <Container 
          display="flex" 
          flexDirection="column" 
          minWidth="100%" 
          backgroundColor="blackAlpha.900" 
          color="beige" 
          padding={{base:'120px 20px 150px 20px',sm:"120px 150px 120px 150px"}}  //padding added to position content visiblity
          rowGap="50px"
          overflowX="auto"
        >
          <Intro/>
          {/* <br/>
          <br/> */}
          <About/>
          <ExperienceList/>
          <Upcoming/>
        </Container>
        <Footer />
      </Container>
      
    </>
  )
}
