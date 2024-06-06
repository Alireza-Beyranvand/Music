
import "./mainLayout.css"
import img from "../../assets/img.jpg";
import { useImmer } from "use-immer";
import { useEffect } from "react";
import { selectStatusLoading, fetchAllbum, fetchMusics } from "../../reducers/MusicSlice";
import { useSelector, useDispatch } from "react-redux";
import PlayerBox from "../playerBox/PlayerBox";
import TitleMusics from "../titleMusic/TitleMusic";
import PlayList from "../playList/PlayList";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {

    const Location = useLocation();

    const [openList, setOpenList] = useImmer(false)


    // open drawer
    const OpenDrawer = () => {
        setOpenList((draft) => !draft)
    }



    const Dispatch = useDispatch()
    const status = useSelector(selectStatusLoading);


    useEffect(() => {
        if (status === "none") {
            Dispatch(fetchMusics());
            Dispatch(fetchAllbum())
        }
    }, [])



    return (
        <>
            <ToastContainer position="top-right" 
            autoClose={3000} hideProgressBar={false} newestOnTopfalse
            closeOnClick draggable />
            <div className="container AllContent" >
                <div className="row" >
                    <div className="col">
                        <div className="container " >
                            <div className="row row1" >
                                <div className="col box text-white" >
                                    <button className=" btn btn-secondary buttonListMusics"
                                        onClick={OpenDrawer} > <i className="fa fa-bars" ></i></button>
                                    <img src={img} alt="Moein" className="imgPlayer" />
                                </div>
                                <TitleMusics />
                            </div>
                            <div className="row row2 text-white" >
                                <div className="col text-center borders" >
                                    <PlayerBox />
                                </div>
                            </div>
                        </div>
                    </div>
                    <PlayList openList={openList} OpenDrawer={OpenDrawer} />
                </div>
            </div>

        </>
    )
};

export default MainLayout;