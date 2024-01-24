import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSpotify } from './hook';
import { TrackI } from "./interface"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';

const track: TrackI = {
  name: "",
  album: {
      images: [
          { url: "" }
      ]
  },
  artists: [
      { name: "" }
  ]
}


export default function Music(){

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [is_paused, setPaused] = useState<boolean>(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState<TrackI | null>(track);

  const {
      createSpotifyInstance,
      togglePlay,
      logout,
      toggleNext,
      togglePause,
      togglePrevious
  } = useSpotify({loggedIn, setLoggedIn, setPaused, setActive, setTrack});


  


  return(
    <>
        <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center" backgroundColor="blackAlpha.900" >
            <Header/>
            {
              !loggedIn ? 
              <Button colorScheme='purple' onClick={()=>createSpotifyInstance()}>
                <a href='http://localhost:8080/auth/login' target="_blank">Login</a>
              </Button>
              :
              <>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  alignItems="center" 
                  justifyContent="center" 
                  // backgroundColor="blackAlpha.800"
                  padding="20px"
                  rounded="10px"
                >
                  <Container display="flex" flexDirection="column" rowGap="10px" alignItems="center">
                      <Image rounded="10px" src={current_track?.album.images[0].url} />

                      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" padding="5px" color="beige">
                          <Text className="now-playing__name">{
                                        current_track?.name
                                        }</Text>

                          <Text className="now-playing__artist">{
                                        current_track?.artists[0].name
                                        }</Text>
                      </Box>
                  </Container>
                  <Container 
                    display="flex" 
                    justifyContent="center" 
                    columnGap="5px" 
                    paddingY="10px" 
                    rounded="10px"
                    >
                    <Button onClick={()=>togglePrevious()}>
                        <SkipPreviousIcon/>
                    </Button>
                    <Button colorScheme='blue' onClick={()=>{
                      console.log(is_paused)
                      if(is_paused) togglePlay()
                      else togglePause()
                    }}>
                      {
                        is_paused ? <PlayArrowIcon/> : <PauseIcon/>
                      }
                    </Button>
                    <Button onClick={()=>toggleNext()}>
                        <SkipNextIcon/>
                    </Button>
                  </Container>
                  <Button colorScheme='purple' onClick={()=>{
                    logout()
                  }}>
                    Logout
                  </Button>
              </Box>
              </>

            }
            <Footer/>
        </Flex>
    </>
  )
}