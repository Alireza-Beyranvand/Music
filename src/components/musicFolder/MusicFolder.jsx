

import { Link, useLocation } from "react-router-dom";
import "./MusicsFolder.css"
import { useSelector } from "react-redux";
import { selectPlayedStatus } from "../../reducers/MusicSlice";


const MusicFolder = ({ allbums }) => {

    const Location = useLocation()
    const AllbumId = allbums.id
    const StatusPlay = useSelector(selectPlayedStatus)


    return (
        <>
            <div className="allbums" >
                <div className="card cardM" >
                    <Link to={StatusPlay === "pause" ? `/MainLayout/musics/${AllbumId}`
                        : StatusPlay === "play" ? Location.pathname : null}
                        className="card-body cardMusics p-1 bg-dark text-white text-decoration-none" >
                        {allbums.nameAllbum}
                    </Link>
                </div>
            </div>

        </>)
};

export default MusicFolder;