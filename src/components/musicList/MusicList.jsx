
import "./MusicsList.css"

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllMusics } from "../../reducers/MusicSlice";
import { useEffect, useState } from "react";

const MusicList = () => {

    const [musics , setMusics] = useState([])

    const Id = useParams()
    const AllMusics = useSelector(selectAllMusics)

console.log(AllMusics)
useEffect(() => {
const filtered = AllMusics.find((musics) => musics.allbum === Id.AllbumId.toString())
console.log(filtered)
setMusics(filtered)
},[])



    return (
        <>

            <div className="musics" >
                <div className="card cardF" >
                    <div className="card-body cardList p-1 bg-dark text-white" >
                       {musics.length > 0 ? (musics.map((music) => <div key={music.id} >{music.name}</div>)) : (<h1>not found</h1>)}
                    </div>
                </div>
            </div>

        </>
    )
};

export default MusicList;