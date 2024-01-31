export interface PlayerI {
    connect: () => Promise<boolean>
    disconnect: () => void
    togglePlay: () => Promise<void>
    activateElement: () => Promise<void>
    addListener: (event: string, callback: (data: any) => void) => void
    getCurrentState: () => Promise<boolean>
  }
  
export interface WindowWithSpotifyI extends Window {
    Spotify: {
      Player: new (options: {
        name: string;
        getOAuthToken: (cb: (token: string) => void) => void;
        volume: number;
      }) => PlayerI;
    };
    onSpotifyWebPlaybackSDKReady?: () => void;
  }

export interface SpotifyHook {
    loggedIn: boolean;
    token: string;
    player: PlayerI | null;
    deviceID: string;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    togglePlay: () => void;
    togglePause: () => void
    togglePrevious: () => void
    toggleNext: () => void
    createSpotifyInstance: () => void;
    logout: () => void;
}

  
  
  
export interface TrackI {
    name: string
    album: {
      images: [
        {
          url: string
        }
      ]
    }
    artists: [
      {
        name: string
      }
    ]
  }

  export interface PlaybackStateI {
    track_window: {
        current_track: TrackI | null
    },
    paused: boolean
}

export interface UseSpotifyParams {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setTrackPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTrack: React.Dispatch<React.SetStateAction<TrackI | null>>;
}