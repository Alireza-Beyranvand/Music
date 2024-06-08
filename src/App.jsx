import { Outlet, useLocation } from "react-router-dom";
import FirstPage from "./components/firstPage/FirstPage";

import { useEffect } from "react";

const App = () => {


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
