import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Player from "../components/player/Player";
import MusicList from "../components/musicList/MusicList";



export const RouterPlayer = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Not found !</h1>,
    },

    {
        path: "/player",
        element: <Player />,
        children : [
            {
                path : "/player/musics/:AllbumId" ,
                element : <MusicList/>
            }
        ]
    }
]);

