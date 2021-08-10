import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import NoImg from '../homeComponent/noImg.png'

export default function CardMovie(props) {
    const movie = props.movie
    const [modal, setmodal] = useState();

    return (
        <div className="col mb-5">
            <Modal show={modal} onHide={() => setmodal(false)} centered
            >
                <img src={movie.Poster} className="thumbnail" alt="Poster" className="img-fluid" onClick={() => setmodal(false)}
                />
            </Modal>
            <div className="card card-body card-movie  text-center h-100" style={{ whiteSpace: 'nowrap', backgroundColor: "#010C1E" }}>
                {
                    movie.Poster === "N/A" ?
                        <img className="w-100 mb-2 poster-movie" src={NoImg} alt="movie_poster" />
                        :
                        <img className="w-100 mb-2 poster-movie" src={movie.Poster} alt="movie_poster" onClick={() => setmodal(true)} style={{ cursor: 'pointer' }} />
                }
                <h6 className="text-light card-title" style={{ overflow: 'hidden', textOverflow: "ellipsis" }} title={`${movie.Title} - ${movie.Year}`}>
                    {movie.Title} - {movie.Year}
                </h6>
                <Link className="btn button-details " style={{ backgroundColor: "#EDB330", fontSize: "14px" }} to={'/movie/' + movie.imdbID}>
                    Movie Details
            <i className="fas fa-chevron-right" />
                </Link>
            </div>
        </div >
    )
}
