


import "./Player.css"
import { useImmer } from "use-immer";
import img from "../../assets/img.jpg";
import { useEffect } from "react";
import MusicFolder from "../musicFolder/MusicFolder";

import { selectStatusLoading, selectAllAllbumes, fetchAllbum , fetchMusics } from "../../reducers/MusicSlice";

import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import PlayerBox from "../PlayerBox/PlayerBox";
import TitleMusics from "../titleMusic/TitleMusic";


const Player = () => {


    const [openList, setOpenList] = useImmer(false)


    const Dispatch = useDispatch()
    const status = useSelector(selectStatusLoading);
    const AllAllbumes = useSelector(selectAllAllbumes);


    useEffect(() => {
        if (status === "none") {
            Dispatch(fetchMusics());
            Dispatch(fetchAllbum())
        }
    }, [])



    // open drawer
    const OpenDrawer = () => {
        setOpenList((draft) => !draft)
    }
    const StyleDrawer = () => {
        if (openList) {
            return { width: "10rem", height: "20rem" }
        } else {
            return null
        }
    }



    // View AllAllbum
    const AllbumList = () => {
        return (
            <>
                {
                    AllAllbumes.length > 0 ? (AllAllbumes.map((allbums) =>
                        <MusicFolder allbums={allbums} />)) : (<h1>Not Found !</h1>)
                }
            </>
        )
    }


    return (
        <>


            <div className="container AllContent" >
                <div className="row" >
                    <div className="col">
                        <div className="container " >
                            <div className="row row1" >
                                <div className="col box text-white" >
                                    <button className=" btn btn-secondary buttonListMusics"
                                        onClick={OpenDrawer} >
                                        <i className="fa fa-bars" ></i>
                                    </button>
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
                    <div className="col-3 PlayerList" style={StyleDrawer()}>
                        <div className="col " >
                            <button className="btn btn-danger btnClose d-none" onClick={OpenDrawer} >
                                <i className="fa fa-close" ></i></button>
                            <div className="row" >
                                <div className="col text-white text-center containerPlayList" >
                                    <div className="row titleListMusic" >
                                        <div className="col-4 border rounded-2" >
                                            Folder
                                        </div>
                                        <div className="col-8 border rounded" >
                                            musics
                                        </div>
                                    </div>
                                    <div className=" row PlayListContent " >
                                        <div className="col PlayListContainerFolder mt-2 p-1 text-start border rounded-3" >
                                            {AllbumList()}
                                        </div>
                                        <div className=" col-8 PlayListContentMusics mt-2 p-1 border rounded-3">
                                            <Outlet />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
};

export default Player;