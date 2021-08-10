import React, { useRef, useEffect } from 'react'
import { useParams, withRouter, } from 'react-router-dom';
import Loading from '../components/loading/loading'
import { useDispatch, useSelector } from 'react-redux'
import { GetdetailMovie } from '../redux/action/movieAction'
import NoImg from '../../src/components/homeComponent/noImg.png'
import Navbar from '../components/navBar'



function SingleMovie() {
    const dispatch = useDispatch()
    const detail = useSelector(state => state.movie.detail)
    const loading_detail_movie = useSelector(state => state.movie.loading_detail_movie)


    const dataparams = useParams()
    const inputRef = useRef(dataparams.id)

    let id = inputRef.current
    useEffect(() => {
        dispatch(GetdetailMovie(id))
    }, [])

    return (
        <div className="bg-dark" style={{ height: '100vh' }}>
            <Navbar />
            <div className="py-5 bg-dark ">
                <div className="container">
                    {
                        loading_detail_movie === false && detail !== undefined ?

                            <>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 card card-body" style={{ cursor: 'pointer' }}>
                                            <img src={detail.Poster === "N/A" ? NoImg : detail.Poster} className="thumbnail" alt="Poster" />
                                        </div>
                                        <div className="col-md-8">
                                            <h2 className="mb-4 " style={{ color: '#EDB330' }}>{detail.Title}</h2>
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <strong>Genre:</strong> {detail.Genre}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Duration:</strong> {detail.Runtime}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Released:</strong> {detail.Released}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Rated:</strong> {detail.Rated}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>IMDB Rating:</strong> {detail.imdbRating}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Director:</strong> {detail.Director}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Writer:</strong> {detail.Writer}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Actors:</strong> {detail.Actors}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="card card-body bg-light my-5 text-dark">
                                            <div className="col-md-12">
                                                <h3>Plot </h3>
                                                {detail.Plot}
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </> :
                            <Loading />

                    }
                </div>
            </div>

        </div>
    )
}

export default (withRouter(SingleMovie));