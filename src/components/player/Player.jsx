
import ms from "../../assets/Instrumental-effect1.mp3"

import "./Player.css"
import { useImmer } from "use-immer";
import img from "../../assets/img.jpg";
import { useEffect, useRef } from "react";
import MusicFolder from "../musicFolder/MusicFolder";

import { selectAllMusics, selectStatusLoading , selectAllAllbumes, fetchAllbum } from "../../reducers/MusicSlice";
import { fetchMusics } from "../../reducers/MusicSlice";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";


const Player = () => {


    const status = useSelector(selectStatusLoading);
    const Allmusics = useSelector(selectAllMusics);
    const AllAllbumes = useSelector(selectAllAllbumes);

    const Dispatch = useDispatch()


    useEffect(() => {
        if (status === "none") {
            Dispatch(fetchMusics());
            Dispatch(fetchAllbum())
        }
    }, [])




    const [openList, setOpenList] = useImmer(false)

    // open drawer
    const OpenDrawer = () => {
        setOpenList((draft) => !draft)
    }

    // musics url
    const music = new Audio(ms)

    const but1 = useRef()
    const but2 = useRef()


    const Playmusic = () => {
        music.play()
        but1.current.style.display = "none"
        but2.current.style.display = "inline"
    }

    const pauseMusic = () => {
        music.pause()
        but1.current.style.display = "inline"
        but2.current.style.display = "none"
    }

    // end Music
    music.onended = () => {
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
        <>


            <div className="container AllContent" >

                <div className="row" >
                    <div className="col">
                        <div className="container " >
                            <div className="row row1" >
                                <div className="col box text-white" >
                                    <button className=" btn btn-secondary buttonListMusics"
                                        onClick={OpenDrawer} >
                                        <i className="fa fa-bars" ></i>
                                    </button>
                                    <img src={img} alt="Moein" className="imgPlayer" />
                                </div>
                                <div className="col box2 " >
                                    <h2 className=" TitlePlayer text-white">Moein</h2>
                                    <p className="textMusic text-white" >
                                        <p className="textContent">
                                            afrkjbfdajfnafdlkjndalbfjna;ldnf
                                            afljandfbojanfdvkjanfda
                                            afpikanfdbkanfdsblakna
                                            aouhfdsouhsfdujhfds
                                            afdsondfobndfonr
                                            afkjdfglkjhdfojnherkjh
                                            adfujhafdjnhafgjn
                                            aqifdsubafdskjnbasfd;lknafdslknafds
                                            asfoindafbpoknafdrson
                                        </p>
                                    </p>
                                    <h5 className="text-center text-white mt-5">1980 - paricher</h5>
                                </div>
                            </div>

                            <div className="row row2 text-white" >
                                <div className="col text-center borders" >

                                    <div className=" btn-group boxControl">
                                        <button className="btn text-white" onClick={decreaseVolume}><i className="fa fa-volume-down" ></i></button>
                                        <button className="btn text-white "><i class="fa-solid fa-backward-fast"></i></button>
                                        <button className="btn text-white" ref={but1} onClick={() => Playmusic()} ><i className={"fa fa-play"} ></i></button>
                                        <button className="btn text-white " ref={but2} onClick={() => pauseMusic()} style={{ display: "none" }}><i className="fa fa-pause" ></i></button>
                                        <button className="btn text-white"><i class="fa-solid fa-forward-fast"></i></button>
                                        <button className="btn text-white" onClick={increaseVolume}><i className="fa fa-volume-up" ></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 PlayerList"
                        style={openList ? { width: "10rem", height: "20rem" } : null} >

                        <div className="col " >
                            <button className="btn btn-danger btnClose d-none" onClick={OpenDrawer} >
                                <i className="fa fa-close" >
                                </i></button>

                            <div className="row" >

                                <div className="col text-white text-center containerPlayList" >

                                    <div className="row titleListMusic" >

                                        <div className="col-4 border rounded-2" >
                                            Folder
                                        </div>
                                        <div className="col-8 border rounded" >
                                            musics
                                        </div>
                                    </div>

                                    <div className=" row PlayListContent " >
                                        <div className="col PlayListContainerFolder mt-2 p-1 text-start border rounded-3" >
                                        {
                                            AllAllbumes? (AllAllbumes.map((allbums) => 
                                            <MusicFolder  allbums={allbums} />)) : (<h1>Not Found !</h1>)
                                        }
                                        </div>
                                        <div className=" col-8 PlayListContentMusics mt-2 p-1 border rounded-3">
                                            <Outlet/>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
};

export default Player;