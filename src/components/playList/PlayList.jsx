
import "./playList.css";
import "../MainLayout/Responsive.css"

import { useSelector } from "react-redux";
import { selectAllAllbumes } from "../../reducers/MusicSlice";
import { Outlet, useLocation } from "react-router-dom";
import MusicFolder from "../playList/musicFolder/MusicFolder";



const PlayList = ({ openList }) => {


    // initialize useLocation
    const Location = useLocation();

    // selector
    const AllAllbumes = useSelector(selectAllAllbumes);


    // open and close drawer playList
    const StyleDrawer = () => {
        if (openList) {
            return { width: "96%", height: "40%" };
        };
    };

    // View AllAllbum
    const AllbumList = () => {
        return (
            <>
                {
                    AllAllbumes.length > 0 ? (AllAllbumes.map((allbums) =>
                        <MusicFolder allbums={allbums} key={allbums.id} Id={allbums.id} />)) : (<h1>Not Found !</h1>)
                }
            </>
        )
    };

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
                                    {Location.pathname === "/MainLayout" ? (<h2 className="mt-5"> <i className="fa fa-arrow-left" />  Select Folder</h2>) : (<Outlet />)}
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