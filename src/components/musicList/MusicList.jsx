
import "./MusicsList.css"

import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MusicFiltered, selectFilteredPlayedMusic } from "../../reducers/MusicSlice";
import { selectFilteredMusics } from "../../reducers/MusicSlice";
import { MusicPlayed } from "../../reducers/MusicSlice";

const MusicList = () => {


    const Location = useLocation();
    const Dispatch = useDispatch();
    const Id = useParams();
    const AllbumId = Id.AllbumId.toString();
    const FiltredMusics = useSelector(selectFilteredMusics);
    const playingMusic = useSelector(selectFilteredPlayedMusic)



    useEffect(() => {
        Dispatch(MusicFiltered(AllbumId))
    }, [Id])



    // send selected musics to playerBox for play

    return (
        <>
            {FiltredMusics.length >= 0 ? (FiltredMusics.map((music) => (
                <div key={music.id} className="musics" >
                    <div className="card cardF" >
                        <button className="btn card-body cardList p-1 bg-dark text-white"
                            style={playingMusic.length >= 0 ? music.id === playingMusic[0].id ? { border: "1px solid red" } : null : null}
                            onClick={() => Dispatch(MusicPlayed(music.id))} >
                            <div className="row" >
                                <div className="col-9  text-start" > {music.name}</div>
                                <cite className="col-2 " >{music.date}</cite>
                                <small className="col-1 playIcon"  style={playingMusic.length >= 0 ? 
                                    music.id === playingMusic[0].id ? { opacity: "1" } : null : null}>
                                     <i  className="fa fa-play" /><i className="fa fa-music" /></small>
                            </div>
                        </button>
                    </div>
                </div>
            ))) : (<h1 className="mt-4">Select Allbume</h1>)}
        </>
    )
};

export default MusicList;

