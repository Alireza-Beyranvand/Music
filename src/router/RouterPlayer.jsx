import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Player from "../components/player/Player";



export const RouterPlayer = createBrowserRouter([
    {
        path : "/" ,
        element : <App/>,
        errorElement : <h1>Not found !</h1>,
        children : [
            {
                path : "/player",
                element:<Player/>
            }
        ]
    }
]);