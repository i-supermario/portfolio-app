import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TrackI } from "../interface";
import { RootState } from "../../../redux/store";

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

interface PlaybackState {
    currentTrack : TrackI | null
    paused : boolean
}

const initialPlaybackState : PlaybackState = {
    currentTrack: track,
    paused: false
}

export const SpotifyPlaybackSlice = createSlice({
    name: "playback",
    initialState: initialPlaybackState,
    reducers: {
        setTrack: (state, action: PayloadAction<TrackI> ) => {
            state.currentTrack = action.payload
        },
        setPaused: (state, action: PayloadAction<boolean> ) => {
            state.paused = action.payload
        },

    }
})

export const { setTrack, setPaused } = SpotifyPlaybackSlice.actions

export const selectTrack = (state: RootState) => state.track.currentTrack 

export const selectPaused = (state: RootState) => state.track.paused

export default SpotifyPlaybackSlice.reducer
