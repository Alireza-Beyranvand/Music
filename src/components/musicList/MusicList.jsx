
import "./MusicsList.css"

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MusicFiltered } from "../../reducers/MusicSlice";
import { fetchMusics } from "../../reducers/MusicSlice";
import { selectFilteredMusics } from "../../reducers/MusicSlice";


const MusicList = () => {

    const Dispatch = useDispatch()
    const Id = useParams()
    const AllbumId = Id.AllbumId.toString()
    const FiltredMusics = useSelector(selectFilteredMusics)

    useEffect(() => {
        Dispatch(MusicFiltered(AllbumId))
    }, [Id])

    return (
        <>
            {FiltredMusics.length >= 0 ? (FiltredMusics.map((music) => (
                <div key={music.id} className="musics" >
                    <div className="card cardF" >
                        <div className="card-body cardList p-1 bg-dark text-white" >
                            {music.name}
                        </div>
                    </div>
                </div>
            ))) : (<h1 className="mt-4">Select Allbume</h1>)}
        </>
    )
};

export default MusicList;

