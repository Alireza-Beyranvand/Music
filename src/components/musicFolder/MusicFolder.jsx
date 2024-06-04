

import { Link } from "react-router-dom";
import "./MusicsFolder.css"



const MusicFolder = ({ allbums }) => {

    const AllbumId = allbums.id

    return (
        <>

            <div className="allbums" >
                <div className="card cardM" >
                    <Link to={`/player/musics/${AllbumId}`} className="card-body cardMusics p-1 bg-dark text-white text-decoration-none" >
                        {allbums.nameAllbum}
                    </Link>
                </div>
            </div>

        </>)
};

export default MusicFolder;