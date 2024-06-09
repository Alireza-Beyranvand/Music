
import "./TitleMusic.css"
import { useSelector } from "react-redux";
import { selectFilteredPlayedMusic } from "../../reducers/MusicSlice";


const TitleMusics = () => {



    const setPlayingMusic = useSelector(selectFilteredPlayedMusic);



    return (
        <>

            <div className="col box2 " >
                <h2 className=" TitlePlayer text-white mt-3 mb-3">Moein</h2>
                <p className="textMusic text-white" >
                    <p className="textContent">
                        {setPlayingMusic.length >= 0 ? setPlayingMusic[0].text : (<h3>select Music</h3>)}
                    </p>
                </p>
                <h5 className="text-center text-white mt-4 footerTitle">1980 - paricher</h5>
            </div>

        </>
    )
};

export default TitleMusics;