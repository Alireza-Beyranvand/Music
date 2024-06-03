
import ms from "./Panjereh.mp3"

import "./Player.css"
import { useImmer } from "use-immer";
import img from "../../assets/img.jpg";
import { useEffect } from "react";
const Player = () => {



    const [openList, setOpenList] = useImmer(false)

    const OpenDrawer = () => {
        setOpenList((draft) => !draft)
    }



    const music = new Audio("https://dl.shabamusic.com/Music/1402/08/07/Moein%20-%20Paricheh%20(128).mp3");

console.log(music)



    return (
        <>


            <div className="container AllContent" >

                <div className="row" >
                    <div className="col" >
                        <div className="container border" >
                            <div className="row row1" >
                                <div className="col box border text-white" >
                                    <button className=" btn btn-secondary buttonListMusics"
                                        onClick={OpenDrawer} >
                                        <i className="fa fa-bars" ></i>
                                    </button>
                                    <img src={img} alt="Moein" className="imgPlayer" />
                                </div>
                                <div className="col box2 border" >
                                    <h2 className=" TitlePlayer text-white">Moein</h2>
                                    <p className="textMusic text-white p-1" >text-music</p>
                                    <h5 className="text-center text-white mt-5">1980 - paricher</h5>
                                </div>
                            </div>

                            <div className="row row2 text-white" >
                                <div className="col text-center borders" >

                                    <div className="boxControl">
                                        
                                        <button className="btn text-white" onClick={() => music.play()}><i  className="fa fa-play" ></i></button>
                                        <button className="btn text-white" onClick={() => music.pause()}><i className="fa fa-stop" ></i></button>
                                        
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 PlayerList "
                        style={openList ? { width: "10rem", height: "20rem" } :
                            null} >
                        <div className="container" >
                            <button className="btn btn-danger btnClose d-none" onClick={OpenDrawer} >
                                <i className="fa fa-close" >
                                </i></button>
                            <div className="row" >
                                <div className="col text-white border text-center" >
                                    gngjgjgjsssssssssss
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