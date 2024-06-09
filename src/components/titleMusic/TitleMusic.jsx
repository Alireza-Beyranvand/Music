
import "./TitleMusic.css"
import { useSelector } from "react-redux";
import { selectFilteredPlayedMusic } from "../../reducers/MusicSlice";


const TitleMusics = () => {



    const setPlayingMusic = useSelector(selectFilteredPlayedMusic);

    const ReadyPlayingText = () => {
        if (setPlayingMusic.length >= 0 && setPlayingMusic[0]) {
            return setPlayingMusic[0].text
        } else {
            return <h3>select Music</h3>
        }
    }

    const ReadyPlayingFolderName = () => {
        if (setPlayingMusic.length >= 0 && setPlayingMusic[0]) {
            return setPlayingMusic[0].name
        } else {
            return <h3>select Music</h3>
        }
    }

    return (
        <>

            <div className="col box2 " >
                <h2 className=" TitlePlayer text-white mt-3 mb-3">Moein</h2>
                <p className="textMusic text-white" >
                    <p className="textContent">
                        {ReadyPlayingText()}
                    </p>
                </p>
                <h4 className="text-center text-white my-3 mt-4 footerTitle">
                    {ReadyPlayingFolderName()}</h4>
            </div>

        </>
    )
};

export default TitleMusics;