
import "./SearchMusics.css"


import { useSelector, useDispatch } from "react-redux";
import { MusicSearchedPlayed, MusicStatusPlayChanged, selectAllMusics } from "../../../reducers/MusicSlice";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";




const SearchMusics = ({ OpenSearchBox, setOpenSearchBox }) => {


    // Close SearchBox
    const CloseSearchBox = () => {
        setOpenSearchBox(false)
    }

    const Dispatch = useDispatch();

    const AllMusics = useSelector(selectAllMusics);

    const [filtredMusics, setFiltredMusics] = useState({});
    const [DisplayMusics, setDisplayMusics] = useState({});



    // auto foucus when is render
    const focus = useRef(null);



    useEffect(() => {
        // start focus
        focus.current.focus()
        focus.current.value = "";
        // empty States +
        //debounce
        setTimeout(() => {
            setFiltredMusics({})
            setDisplayMusics({})
        }, 1000)

    }, [OpenSearchBox])


    // search filter

    // recived content from Input
    const recivedInput = (event) => {
        //debounce
        setTimeout(() => {
            setFiltredMusics(event)
        }, [])
    }

// button search and Filter by filtredMusics
    const Search = () => {
        const Filtered = AllMusics.filter((filter) => filter.name.toUpperCase()
            .includes((filtredMusics.toUpperCase())));

        if (filtredMusics.length < 0) {
            setDisplayMusics({})
        } else {
            setDisplayMusics(Filtered)
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
                   text-white w-100 mt-1 border" >{musics.name}</button>) : DisplayMusics.length === 0 ? (<h1 className="errors">No music</h1>)
                        : <h1 className="errors">Search Musics </h1>
                }

            </>
        )
    }



    return (
        <>


            <div className="col m-0 mb-3 buttonCloseSearchBox " >
                <button className=" btn btn-danger w-25 p-0" onClick={CloseSearchBox}><i className="fa fa-close" ></i></button>
            </div>
            <div className="row mx-1" >
                <input className="form-control p-0 w-50 mx-auto mb-4 text-center" ref={focus}
                    placeholder="Name Music" onChange={(event) => recivedInput(event.target.value)} />
                <div className="col">
                    <button className="btn btn-outline-light w-100 py-0 mx-2" onClick={() => Search()}>Search</button>
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
        </>
    )
};



export default SearchMusics;