import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlaybackStateI, PlayerI, TrackI } from "../interface";
import { RootState } from "../../../redux/store";

interface state {
    player : PlayerI | null
    deviceID : string
}

const initialSpotifyState : state = {
    player : null,
    deviceID : ""
}


export const SpotifyLoginSlice = createSlice({
    name: "Login",
    initialState: initialSpotifyState,
    reducers : {
        setDeviceID: (state, action : PayloadAction<string>) => {
            state.deviceID = action.payload
        },
        setPlayer: (state, action : PayloadAction<PlayerI>) => {
            state.player = action.payload
        },
    }

})


export const { setDeviceID, setPlayer } = SpotifyLoginSlice.actions


export const selectPlayer = (state: RootState) => state.login.player
export const selectDevice = (state: RootState) => state.login.deviceID

export default SpotifyLoginSlice.reducer