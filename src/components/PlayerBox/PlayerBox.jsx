import "../playerBox/playerBox.css";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectFilteredPlayedMusic } from "../../reducers/MusicSlice";



const PlayerBox = () => {

    const [musics, setMusics] = useState({})

    // musics for playing
    const musicsForPlay = useSelector(selectFilteredPlayedMusic)

    useEffect(() => {

        if (musicsForPlay.length >= 0) {
            setMusics(musicsForPlay[0].url)
        }
    }, [musicsForPlay])

    return (
        <>
            <audio autoPlay controls src={musics} />
        </>
    )
};

export default PlayerBox;