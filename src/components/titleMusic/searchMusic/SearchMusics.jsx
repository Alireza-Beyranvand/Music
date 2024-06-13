
import "./SearchMusics.css"

import { useSelector, useDispatch } from "react-redux";
import { MusicSearchedPlayed, MusicStatusPlayChanged, selectAllMusics, selectStatusPlay } from "../../../reducers/MusicSlice";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

const SearchMusics = ({ setOpenSearchBox }) => {


    // Close SearchBox
    const CloseSearchBox = () => {
        setOpenSearchBox(false)
    }

    const Dispatch = useDispatch();

    const AllMusics = useSelector(selectAllMusics);
    const StatusPlay = useSelector(selectStatusPlay)

    const [filredMusics, setFiltredMusics] = useState({});
    const [DisplayMusics, setDisplayMusics] = useState({});



    // auto foucus when is render
    const focus = useRef(null);



    useEffect(() => {
        // start focus
        focus.current.focus()
        // empty States
        setFiltredMusics(null)
        setFiltredMusics(null)
    }, [setOpenSearchBox])


    // search filter
    const Search = () => {
        const Filtered = AllMusics.filter((filter) => filter.name.toUpperCase()
            .includes((filredMusics.toUpperCase())));
        if (Filtered) {
            if (filredMusics.length > 0) {
                setDisplayMusics(Filtered)
            } else {
                setDisplayMusics({})
            }
        }
    }


    // send music to PlayerBox by Dispatch and Display Play Icone
    const sendToPlayBox = (musicsId, musics) => {
        //close SearcjBox
        CloseSearchBox()
        //toast dismiss
        toast.dismiss()
        Dispatch(MusicSearchedPlayed(musicsId))
        Dispatch(MusicStatusPlayChanged("play"))
        //toast succses
        toast.success(`"${musics.name}" please wait ...`, {
            autoClose: 5000
        })
    }

    // show Music filtered by search
    const ShowMusicsFiltred = () => {
        return (
            <>
                {
                    DisplayMusics.length > 0 ? DisplayMusics.map((musics) =>
                        <button onClick={() => sendToPlayBox(musics.id, musics)}
                            key={musics.id} className="btn btn-outline-secondary 
                   text-white w-100 mt-1 border" >{musics.name}</button>) :
                        <h2 style={{ marginTop: "3.7rem" }}>No Music</h2>
                }

            </>
        )
    }



    return (
        <>

            <div className="row searchBox" >
                <div className="col m-0 mb-3 buttonCloseSearchBox " >
                    <button className=" btn btn-danger w-25 p-0" onClick={CloseSearchBox}><i className="fa fa-close" ></i></button>
                </div>
                <div className="row mx-1" >
                    <input className="form-control p-0 w-50 mx-auto mb-4 text-center" ref={focus}
                        placeholder="Name Music" onChange={(event) => setFiltredMusics(event.target.value)} />
                    <div className="col">
                        <button className="btn btn-outline-light w-100 py-0 mx-2" onClick={Search}>Search</button>
                    </div>
                </div>
                <div className="row serachResult mb-4 mx-1 " >
                    <div className="labelserachResult pt-1 mb-1">
                        serachResult
                    </div>
                    <div className="serachResultContent mt-1 px-2 pt-1" >
                        {ShowMusicsFiltred()}
                    </div>
                </div>
            </div>
        </>
    )
};



export default SearchMusics;