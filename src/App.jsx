import { Outlet, useLocation } from "react-router-dom";
import FirstPage from "./components/firstPage/FirstPage";

import { useEffect } from "react";

const App = () => {

useEffect(() => {
  toast("Wow so easy!")
})

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
