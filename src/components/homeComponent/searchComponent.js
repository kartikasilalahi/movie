import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GetListMovie } from '../../redux/action/movieAction'
import axios from 'axios';
import { BsX } from "react-icons/bs";

export default function SearchComponent() {
    const dispatch = useDispatch()

    const [keysearch, setkeysearch] = useState("");
    const [sugesstions, setsugesstions] = useState([]);
    const [showSuggestions, setshowSuggestions] = useState(false);


    return (
        <div style={{ maxWidth: "221px" }} >

            <div className="input-group input-group-sm">
                <input type="text" className="form-control" aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => {
                        setkeysearch(e.target.value)
                        if (e.target.value.length >= 3) {
                            let key = e.target.value
                            axios.get(`http://www.omdbapi.com/?s=${key}&apikey=faf7e5bb&page=1`)
                                .then(res => {
                                    if (res.data.Response !== "False") {
                                        setsugesstions(res.data.Search)
                                        setshowSuggestions(true)
                                    }
                                })
                        } else {
                            setshowSuggestions(false)
                        }
                    }}
                    value={keysearch}
                    placeholder="Search Movie"
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && event.target.value.length >= 3) {
                            let key = event.target.value
                            dispatch(GetListMovie(key, "", "", 1))
                            setshowSuggestions(false)
                            setkeysearch("")
                        }
                    }}
                />
                <button
                    className=" bg-transparent"
                    onClick={() => {
                        setshowSuggestions(false)
                        setkeysearch("")
                        dispatch(GetListMovie("Batman", "", "", 1))
                    }}
                    style={{ marginLeft: '-32px', zIndex: 100, borderColor: "transparent" }}>
                    <BsX />
                </button>

            </div>
            {
                showSuggestions === true ?
                    <div >
                        {
                            sugesstions && sugesstions.length > 0 ?
                                <ul className="suggestions">
                                    {
                                        sugesstions.map((suggestion, index) => (
                                            <li key={suggestion.imdbID} onClick={() => {
                                                dispatch(GetListMovie(suggestion.Title, "", "", 1))
                                                setshowSuggestions(false)

                                            }}>
                                                {suggestion.Title}
                                            </li>
                                        ))
                                    }
                                </ul>
                                :
                                <>No field</>

                        }
                    </div>
                    :
                    null
            }
        </div >
    )
}
