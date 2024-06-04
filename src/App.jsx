import { Outlet, useLocation } from "react-router-dom";
import FirstPage from "./components/firstPage/FirstPage";
import Player from "./components/player/Player";
const App = () => {

  const Location = useLocation()

  return (
    <>
      <div className="App" >

        <FirstPage/>
        {/* <Player/> */}
        {/* <Outlet /> */}


      </div>

    </>
  )
}

export default App;
