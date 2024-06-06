
import "./MusicsList.css"

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MusicFiltered } from "../../reducers/MusicSlice";
import { fetchMusics } from "../../reducers/MusicSlice";
import { selectFilteredMusics , selectPlayedStatus } from "../../reducers/MusicSlice";
import { MusicPlayed } from "../../reducers/MusicSlice";
import { toast } from "react-toastify";

const MusicList = () => {



    const Dispatch = useDispatch()
    const Id = useParams()
    const AllbumId = Id.AllbumId.toString()
    const FiltredMusics = useSelector(selectFilteredMusics)

    const StatusPlay = useSelector(selectPlayedStatus)

console.log(StatusPlay)


    useEffect(() => {
        Dispatch(MusicFiltered(AllbumId))
    }, [Id])

const ClickForSend = (MusicId) => {
    if (StatusPlay === "pause" ){
        Dispatch(MusicPlayed(MusicId))
    } else if(StatusPlay === "play"){
        toast.info("Please stop the music !")
    }
}


// send selected musics to playerBox for play

    return (
        <>
            {FiltredMusics.length >= 0 ? (FiltredMusics.map((music) => (
                <div key={music.id} className="musics" >
                    <div className="card cardF" >
                        <button className=" btn card-body cardList p-1 bg-dark text-white" 
                        onClick={ () => ClickForSend(music.id) } >
                            {music.name}
                        </button>
                    </div>
                </div>
            ))) : (<h1 className="mt-4">Select Allbume</h1>)}
        </>
    )
};

export default MusicList;

