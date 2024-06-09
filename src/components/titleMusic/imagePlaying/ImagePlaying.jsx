
import "./ImagePlaying.css";
import img from "../../../assets/img.jpg";
import { useSelector } from "react-redux";
import { selectFilteredPlayedMusic, selectAllAllbumes } from "../../../reducers/MusicSlice";

const ImagePlaying = () => {


    // All allbum
    const AllAlbume = useSelector(selectAllAllbumes);
    // Photo of music playing
    const playing = useSelector(selectFilteredPlayedMusic);


    const imgMusicPlaying = () => {
        if (playing.length >= 0 && playing[0]) {
            const allbumIdPlaying = playing[0].allbum;
            const filteredImg = AllAlbume.filter((allbum) => allbum.id === allbumIdPlaying);
            const readyImg =  filteredImg[0].img;
            return readyImg;
        } else {
            return img;
        }
    };


    return (
        <div>
            <img src={imgMusicPlaying()}  alt="Moein" className="imgPlayer" />
        </div>
    )
}


export default ImagePlaying;