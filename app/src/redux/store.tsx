import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import SpotifyLoginReducer from "../pages/spotify/slice/spotifylogin"
import SpotifyTrackReducer from "../pages/spotify/slice/spotifytrack"



const persistConfig = {
    key: 'root',
    storage,
}

// const customizedMiddleware = 

const combinedReducer = combineReducers(
    {
        'login' : SpotifyLoginReducer,
        'track' : SpotifyTrackReducer
    }
)

const persistedReducer = persistReducer(persistConfig, combinedReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch