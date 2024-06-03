

import "./Player.css"
import { useImmer } from "use-immer";



const Player = () => {



    const [openList, setOpenList] = useImmer(false)
    console.log(openList)


    return (
        <>


            <div className="container AllContent" >
                <div className="row" >
                    <div className="col" >
                        <div className="container border" >
                            <div className="row row1" >
                                <div className="col box border" >
                                    <button className=" btn btn-secondary buttonListMusics "
                                        onClick={() => setOpenList((draft) => !draft)}
                                    >
                                        <i className="fa fa-bars" ></i></button>
                                                            </div>
                                    <div className="col box2 border" >
                                    dd
                                </div>
                            </div>
                            <div className="row row2 border" >dddd</div>
                        </div>
                    </div>
                    <div className="col-3 PlayerList "
                        style={openList ? { width: "10rem", height: "20rem" } :
                            { width: "0"  }} >
                        <div className="container" >
                            <button className="btn btn-danger btnClose" onClick={() => setOpenList((draft) => !draft)} ><i className="fa fa-close" ></i></button>
                            <div className="row" >
                                <div className="col text-white" >dfffffd
                                    gngjgjgj
                                    <br />
                                    <br />
                                    fhfhfh</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
};

export default Player;