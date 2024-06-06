import "../MainLayout/mainLayout.css";
import { useEffect, useMemo, useRef, useState } from "react";
import ms from "../../assets/Instrumental-effect1.mp3"
import { useSelector , useDispatch } from "react-redux";
import { selectFilteredPlayedMusic } from "../../reducers/MusicSlice";
import { musicPaused } from "../../reducers/MusicSlice";

import { useParams } from "react-router-dom";
const PlayerBox = () => {


    const Dispatch = useDispatch()


    const [musics, setMusics] = useState({})

    // musics for playing
    const musicsForPlay = useSelector(selectFilteredPlayedMusic)





    useEffect(() => {

        if (musicsForPlay.length >= 0) {
            setMusics(musicsForPlay[0].url)
        }
    }, [musicsForPlay])


    // musics url
    const music = new Audio(musics)


    // refs
    const but1 = useRef()
    const but2 = useRef()

    const Playmusic = () => {
        Dispatch(musicPaused("play"))
        music.play()
        but1.current.style.display = "none"
        but2.current.style.display = "inline"
    }
    const pauseMusic = () => {
        Dispatch(musicPaused("pause"))
        music.pause()
        but1.current.style.display = "inline"
        but2.current.style.display = "none"
    }
    // end Music
    music.onended = () => {
        Dispatch(musicPaused("pause"))
        but1.current.style.display = "inline"
        but2.current.style.display = "none";
    };


    const audio = useRef(music);
    const increaseVolume = () => {
        if (audio.current.volume < 1) {
            audio.current.volume += 0.1;
        }
    };
    const decreaseVolume = () => {
        if (audio.current.volume > 0) {
            audio.current.volume -= 0.1;
        }
    };





    return (
        <div className=" btn-group boxControl" >
            <button className="btn text-white" onClick={decreaseVolume}><i className="fa fa-volume-down" ></i></button>
            <button className="btn text-white "><i class="fa-solid fa-backward-fast"></i></button>
            <button className="btn text-white" ref={but1} onClick={() => Playmusic()} disabled={musics.length ? false : true}  ><i className={"fa fa-play"} ></i></button>
            <button className="btn text-white " ref={but2} onClick={() => pauseMusic()} style={{ display: "none" }}><i className="fa fa-pause" ></i></button>
            <button className="btn text-white"><i class="fa-solid fa-forward-fast"></i></button>
            <button className="btn text-white" onClick={increaseVolume}><i className="fa fa-volume-up" ></i></button>
        </div>

    )
};

export default PlayerBox;