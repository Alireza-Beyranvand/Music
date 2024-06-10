
import "./MusicsList.css"

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { MusicFiltered, MusicStatusPlayChanged, selectAllAllbumes, selectFilteredPlayedMusic, selectStatusPlay } from "../../../reducers/MusicSlice";
import { selectFilteredMusics } from "../../../reducers/MusicSlice";
import { MusicPlayed } from "../../../reducers/MusicSlice";

const MusicList = () => {


    // recived musicId from Url by params
    const Id = useParams();
    const AllbumId = Id.AllbumId.toString();


    // initilize Dispatch
    const Dispatch = useDispatch();


    // selectors
    const FiltredMusics = useSelector(selectFilteredMusics);
    const playingMusic = useSelector(selectFilteredPlayedMusic)
    const AllAlbumes = useSelector(selectAllAllbumes)
    const StatusPlay = useSelector(selectStatusPlay)

    // recived Allmusic form server
    useEffect(() => {
        Dispatch(MusicFiltered(AllbumId))
    }, [Id])


    // showe nameAllbum in MusicList
    const ShowAllbum = (Id) => {
        const filtered = AllAlbumes.filter((filter) => filter.id === AllbumId)
        return (
            filtered[0]
        )
    }

    // set Icon playing and change backgtound
    const ChangeClassNameForPlay = (musicId) => {
        const preClass = "btn card-body cardList p-1 bg-dark text-white";
        if (playingMusic.length >= 0 && musicId === playingMusic[0].id) {
            return `${preClass} PlayingMusic`
        } else {
            return preClass
        }
    }

    // Conditions style play icone
    const ChangeStyleForIcone = (musicId) => {
        if (playingMusic.length >= 0 && musicId === playingMusic[0].id && StatusPlay === "play") {
            return { opacity: "1" }
        } else {
            return null
        }
    }


    // send music to PlayerBox by Dispatch and Display Play Icone
    const sendToPlayBox = (musicId) => {
        Dispatch(MusicPlayed(musicId))
        Dispatch(MusicStatusPlayChanged("play"))
    }


    return (
        <>
            {FiltredMusics.length >= 0 ? (FiltredMusics.map((music) => (
                <div key={music.id} className="musics" >
                    <div className="card cardF mb-1" >
                        <button
                            className={ChangeClassNameForPlay(music.id)}
                            onClick={() => sendToPlayBox(music.id)} >
                            <div className="row">
                                <div className="col text-start mx-2" >{music.name}</div>
                                <div className="col dateText "  >{ShowAllbum(music.id).date}</div>
                                <cite className="col">{ShowAllbum(music.id).nameAllbum}</cite>
                                <small className="col-1 playIcon" style={ChangeStyleForIcone(music.id)}>
                                    <i className="fa fa-play fa-animaion" />
                                    <i className="fa fa-music fa-animaion" />
                                </small>
                            </div>
                        </button>
                    </div>
                </div>
            ))) : (<h1 className="mt-4">Select Allbume</h1>)}
        </>
    )
};


export default MusicList;
