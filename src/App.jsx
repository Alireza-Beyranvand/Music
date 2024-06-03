import { Outlet, useLocation } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import "../public/css/AppStyle.css";
import Player from "./components/player/Player";
const App = () => {

  const Location = useLocation()

  return (
    <>
      <div className="App" >

        {/* <FirstPage/> */}
        <Player/>
        <Outlet />


      </div>

    </>
  )
}

export default App;
