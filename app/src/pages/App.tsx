import { Container } from "@chakra-ui/react"
import Header from '../layouts/header'
import Footer from "../layouts/footer"
import About from "../components/about"
import Intro from "../components/introduction"
import Upcoming from "../components/upcoming"
import ExperienceList from "../components/experiencelist"



const containerStyle = {
  padding: "0 0 0 0",
  minWidth: "100vw",
  zIndex: "0",
  display: "flex",
  flexDirection: "column",
}

export default function App() {
  return (
    <>
      <Container sx={containerStyle} >
        <Header />
        <Container display="flex" flexDirection="column" minWidth="100%" backgroundColor="blackAlpha.900" color="beige" 
        padding="120px 150px 120px 150px"  //padding added to position content visiblity
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
