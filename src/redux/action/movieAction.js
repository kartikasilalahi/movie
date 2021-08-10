import Axios from 'axios'
import { API, API_KEY } from '../../config'
import swal from 'sweetalert'
import {
    GET_LIST_MOVIE_REQUEST,
    GET_LIST_MOVIE_SUCCESS,

    GET_DETAIL_MOVIE_REQUEST,
    GET_DETAIL_MOVIE_SUCCESS,

    SEARCH_MOVIE_REQUEST,
    SEARCH_MOVIE_SUCCESS,

    GET_MORE_MOVIE_REQUEST,
    GET_MORE_MOVIE_SUCCESS
} from '../types'


const GetListMovieReq = () => {
    return {
        type: GET_LIST_MOVIE_REQUEST
    }
}
const GetListMovieSuccess = (data) => {
    // console.log("drtt", data)
    return {
        type: GET_LIST_MOVIE_SUCCESS,
        payload: data
    }
}

export const GetListMovie = (s, type, y, page) => {
    return (
        async (dispatch) => {
            dispatch(GetListMovieReq())
            try {
                const list = await Axios.get(`${API}?apikey=${API_KEY}&s=${s}&page=${page}&type=${type}&y&year=${y}`)
                if (list.data.Response !== "False") {
                    const newPage = page + 1
                    dispatch(GetListMovieSuccess({ data: list.data.Search, page: newPage, keyword: s }))
                }
            } catch (error) {
                swal("Oops", `Message from OMDB API, ${error.response.data.Error}`, "warning")
                    .then(() => {
                        window.location.href = "/"
                    })
            }
        }
    )
}


const GetDetailReq = () => {
    return {
        type: GET_DETAIL_MOVIE_REQUEST
    }
}
const GetDetailSuccess = (data) => {
    // console.log("drtt", data)
    return {
        type: GET_DETAIL_MOVIE_SUCCESS,
        payload: data
    }
}

export const GetdetailMovie = (i) => {
    return (
        async (dispatch) => {
            dispatch(GetDetailReq())
            try {
                const list = await Axios.get(`${API}?apikey=${API_KEY}&i=${i}`)
                if (list.data.Response !== "False") {
                    dispatch(GetDetailSuccess(list.data))
                }
            } catch (error) {
                swal("Oops", `Message from OMDB API, ${error.response.data.Error}`, "warning")
                    .then(() => {
                        window.location.href = "/"
                    })

            }
        }
    )
}


const SearhMovieRew = () => {
    return {
        type: SEARCH_MOVIE_REQUEST
    }
}
const SearchMovieSuccess = (data) => {
    // console.log("drtt", data)
    return {
        type: SEARCH_MOVIE_SUCCESS,
        payload: data
    }
}

export const SearchMovie = (s) => {
    return (
        async (dispatch) => {

            dispatch(SearhMovieRew())
            try {
                const list = await Axios.get(`${API}?apikey=${API_KEY}&s=${s}&page=${1}`)
                if (list.data.Response !== "False") {
                    dispatch(SearchMovieSuccess({ data: list.data.Search, keyword: s }))
                }
            } catch (error) {
                swal("Oops", `Message from OMDB API, ${error.response.data.Error}`, "warning")
                    .then(() => {
                        window.location.href = "/"
                    })
            }
        }
    )
}


const GetMoreReq = () => {
    return {
        type: GET_MORE_MOVIE_REQUEST
    }
}
const GetMoreSucces = (data) => {
    // console.log("drtt", data)
    return {
        type: GET_MORE_MOVIE_SUCCESS,
        payload: data
    }
}

export const GetMore = (s, type, y, page) => {
    return (
        async (dispatch) => {
            dispatch(GetMoreReq())
            try {
                const list = await Axios.get(`${API}?apikey=${API_KEY}&s=${s}&page=${page}&type=${type}&y&year=${y}`)
                if (list.data.Response !== "False") {
                    const newPage = page + 1
                    dispatch(GetMoreSucces({ data: list.data.Search, page: newPage, keyword: s }))
                }
            } catch (error) {
                // swal("Oops", `Message from OMDB API, ${error.response.data.Error}`, "warning")
                //     .then(() => {
                //         window.location.href = "/"
                //     })
            }
        }
    )
}
