import { Container } from "@chakra-ui/react"
import Header from '../layouts/header'
import Footer from "../layouts/footer"
import About from "../components/about"
import Intro from "../components/introduction"



const containerStyle = {
  padding: "0 0 0 0",
  minWidth: "1440px",
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
          <Intro/>
          <br/>
          <br/>
          <About/>
        </Container>
        <Footer />
      </Container>
    </>
  )
}
