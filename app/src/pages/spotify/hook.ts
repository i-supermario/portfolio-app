import { useEffect, useState } from 'react';
import { TrackI, WindowWithSpotifyI, PlayerI, PlaybackStateI, SpotifyHook,UseSpotifyParams  } from "./interface"

const ENV = 'DEV'
const URL = ENV == 'DEV' ? "http://localhost:8080" : "https://portfolio-backend-yb78.onrender.com"

export const useSpotify = ({
    loggedIn,
    setLoggedIn,
    setTrackPaused,
    setCurrentTrack
}: UseSpotifyParams): SpotifyHook => {

    // const dispatch = useDispatch<AppDispatch>()
    const [token, setToken] = useState<string>("");
    const [player,setPlayer] = useState<PlayerI | null>(null)
    const [deviceID,setDeviceID] = useState<string>("")

    



    // console.log("token:",token)


    useEffect(() => {  
        console.log("Getting new token")
        if(!token){
          fetch(`${URL}/auth/token`)
          .then(res => res.json())
          .then((data: { access_token: string } ) => {
            setToken(data.access_token)
          })
          .catch(e => console.log(e))
        }
    
      }, [loggedIn]);

    //   useEffect(()=>{
    //     setPlayer(player)
    //   },[player])


    const createSpotifyInstance = () => {
        // if(deviceID){
        //     return
        // }
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        const windowWithSpotify = window as unknown as WindowWithSpotifyI

        if (!loggedIn && windowWithSpotify) {
            windowWithSpotify.onSpotifyWebPlaybackSDKReady = () => {
                const newPlayer: PlayerI = new windowWithSpotify.Spotify.Player({
                    name: 'Spotify@Sarang',
                    getOAuthToken: (cb) => {
                        cb(token);
                    },
                    volume: 0.5
                });

                newPlayer?.addListener('ready', ({ device_id }: { device_id: string }) => {
                    console.log('Ready with Device ID', device_id);
                    transferPlayback(device_id)
                    // dispatch(setDeviceID(device_id))
                    setDeviceID(device_id)

                });

                newPlayer?.addListener('player_state_changed', ((state: PlaybackStateI) => {
                    
                    setCurrentTrack(state.track_window.current_track)
                    // dispatch(setTrack(state.track_window.current_track as TrackI))
                    // dispatch(setPaused(state.paused))

                    newPlayer.getCurrentState().then( state => console.log("Current State:",state)).catch(e => console.log(e))

                }));

                newPlayer.addListener('autoplay_failed', () => {
                    console.log('Autoplay is not allowed by the browser autoplay rules');
                    togglePlay()
                });

                newPlayer?.connect()
                    .then(success => {
                        console.log(`Player connected: ${Boolean(success).toString()}`);
                        setLoggedIn(true);
                        console.log(loggedIn)
                    })
                    .catch(e => console.log(e));
                // dispatch(setPlayer(newPlayer))
                setPlayer(newPlayer)
            };
        }
    };


    const togglePlay = () => {

        console.log("playing")

    
        const config = {
          method: "PUT",
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
        const URL = `https://api.spotify.com/v1/me/player/play?device_id=${deviceID}`
        console.log(URL)
    
        fetch(URL,config)
        .then(() => {
            setTrackPaused(false)
            // dispatch(setPaused(false))
        })
        .catch(e => console.log(e))
    
    }

    const togglePause = () => {

        console.log("pause")

    
        const config = {
          method: "PUT",
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
        const URL = `https://api.spotify.com/v1/me/player/pause?device_id=${deviceID}`
        console.log(URL)
    
        fetch(URL,config)
        .then(() =>{
            setTrackPaused(true)
            // dispatch(setPaused(true))
        })
        .catch(e => console.log(e))
    
    }

    const togglePrevious = () => {

        console.log("previous")
    
        const config = {
          method: "POST",
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
        const URL = `https://api.spotify.com/v1/me/player/previous?device_id=${deviceID}`
        console.log(URL)
    
        fetch(URL,config)
        .then(res => console.log(res))
        .catch(e => console.log(e))
    
    }

    const toggleNext = () => {

        console.log("next")
    
        const config = {
          method: "POST",
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
        const URL = `https://api.spotify.com/v1/me/player/next?device_id=${deviceID}`
        console.log(URL)
    
        fetch(URL,config)
        .then(res => console.log(res))
        .catch(e => console.log(e))
        
    
    }



    const transferPlayback = (device_id: string) => {
        console.log("transferring playback")

        // const urlParams = URLSearchParams()
        console.log(deviceID)

        const config = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body : JSON.stringify({
                "device_ids": [
                    device_id
                ],
                "play": true
            })
        }

        const URL = "https://api.spotify.com/v1/me/player/"

        fetch(URL,config)
        .then(() => console.log("Playback transferred to current device"))
        .then(() => setTrackPaused(false))
        .catch(e => console.log(e))

    }

    const logout = () => {
        setLoggedIn(false)
        togglePause()
        setDeviceID
        setToken("")
        player?.disconnect()
    };

    return {
        loggedIn,
        token,
        player,
        deviceID,
        setLoggedIn,
        togglePlay,
        togglePause,
        toggleNext,
        togglePrevious,
        createSpotifyInstance,
        logout,
    };
};
