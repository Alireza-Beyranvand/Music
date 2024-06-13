
import "./TitleMusic.css"
import "../MainLayout/Responsive.css";

import { useDispatch, useSelector } from "react-redux";
import { MusicRepetitioned, selectFilteredPlayedMusic, selectMusicRepetition } from "../../reducers/MusicSlice";
import { toast } from "react-toastify";
import SearchMusics from "./searchMusic/SearchMusics";


const TitleMusics = () => {

    //initializi useDispatch

    const Dispatch = useDispatch()

    // selectots
    const setPlayingMusic = useSelector(selectFilteredPlayedMusic);
    const StatusRepetition = useSelector(selectMusicRepetition)


    // Music Text
    const ReadyPlayingText = () => {
        if (setPlayingMusic.length >= 0 && setPlayingMusic[0]) {
            return setPlayingMusic[0].text
        } else {
            return <h3>select Music</h3>
        }
    }

    // folderName
    const ReadyPlayingFolderName = () => {
        if (setPlayingMusic.length >= 0 && setPlayingMusic[0]) {
            return setPlayingMusic[0].name
        } else {
            return <h3>select Music</h3>
        }
    }


    // Select Button repartition Music

    const MusicRepartition = () => {
        // disableing toast for reSelect
        toast.dismiss()
        // Activite music repetitione
        Dispatch(MusicRepetitioned())
        // condition when activite and inactive
        if (StatusRepetition) {
            toast.info("repartition Off")
        } else {
            toast.info("repartition On")
        }
    }

    // trun on MusicRepartition 
    const StyleButtonMusicRepartition = () => {
        if (StatusRepetition) {
            return "btn btn-primary mx-2"
        } else {
            return "btn text-white mx-2"
        }
    }

    return (
        <>

            <div className="col box2 " >
                <div className="row" ></div>
                <h2 className=" TitlePlayer text-white mt-3 mb-3">{ReadyPlayingFolderName()}</h2>
                <p className="textMusic text-white"  >
                    <p className="textContent">
                        {ReadyPlayingText()}
                    </p>
                </p>
                <div className="container text-center
                text-white my-3 mt-3 footerTitle">

                    {/* button for active MusicRepartition */}
                    <div className="btn-group" role="group">
                        <button className={StyleButtonMusicRepartition()} z
                            onClick={() => MusicRepartition()} title="repartition" >
                            <i className="fa-solid fa-repeat pt-1" /></button>
                    </div>

                    {/* <button type="button" className="btn btn-secondary">2</button> */}
                    <button className="btn ">
                        
                    </button>
                    <SearchMusics />
                </div>
            </div>

        </>
    )
};

export default TitleMusics;