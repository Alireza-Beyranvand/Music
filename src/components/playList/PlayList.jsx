import { useImmer } from "use-immer";
import { useSelector, useDispatch } from "react-redux";
import { selectStatusLoading, selectAllAllbumes, fetchAllbum, fetchMusics } from "../../reducers/MusicSlice";
import { Outlet } from "react-router-dom";

import "../MainLayout/mainLayout.css"

import img from "../../assets/img.jpg";
import { useEffect } from "react";
import MusicFolder from "../musicFolder/MusicFolder";




const PlayList = ({openList}) => {


    const AllAllbumes = useSelector(selectAllAllbumes);

console.log(openList)

    const StyleDrawer = () => {
        if (openList) {
            return { width: "90%", height: "24%" } 
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

            <div className="col-3 PlayerList" style={StyleDrawer()}>
                <div className="col " >
                    <div className="row" >
                        <div className="col text-white text-center containerPlayList" >
                            <div className="row titleListMusic" >
                                <div className="col-4 border rounded-2" >
                                    Folder </div>
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
        </>
    )
};

export default PlayList;