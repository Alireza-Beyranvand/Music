import "../playerBox/playerBox.css";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectFilteredPlayedMusic , MusicStatusPlayChanged } from "../../reducers/MusicSlice";



const PlayerBox = () => {

    // initialize useDispatch
    const Dispatch = useDispatch()

    // states
    const [musics, setMusics] = useState({})

    // musics for playing
    const musicsForPlay = useSelector(selectFilteredPlayedMusic)

    
    useEffect(() => {

        if (musicsForPlay.length >= 0) {
            setMusics(musicsForPlay[0].url)
        }
    }, [musicsForPlay])


// When the music is finished, it will be sent
    const ChangeStatusPlayEnded = () => {
        Dispatch(MusicStatusPlayChanged("pause"))
    }

    return (
        <>
            <audio autoPlay controls src={musics} onEnded={ChangeStatusPlayEnded} />
        </>
    )
};

export default PlayerBox;