import { Outlet, useLocation } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import "../public/css/AppStyle.css";
const App = () => {

  const Location = useLocation()

  return (
    <>
      <div className="App" >

        <FirstPage/>
        <Outlet />


      </div>

    </>
  )
}

export default App;
