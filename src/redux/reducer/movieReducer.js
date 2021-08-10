
import {
    GET_LIST_MOVIE_REQUEST,
    GET_LIST_MOVIE_SUCCESS,

    GET_DETAIL_MOVIE_REQUEST,
    GET_DETAIL_MOVIE_SUCCESS,

    SEARCH_MOVIE_SUCCESS,

    GET_MORE_MOVIE_REQUEST,
    GET_MORE_MOVIE_SUCCESS
} from '../types'

const initial_state = {
    list_movie: [],
    loading_list_movie: false,
    genre: '',
    genres: {
        '': 'All Genre',
        'movie': 'Movie',
        'series': 'Series',
        'episode': 'Episode',
        'games': 'Games'
    },
    year: '',
    page: 0,
    leng: 0,
    film: false,
    detail: {},
    loading_detail_movie: false,
    keyword: "",
    suggestions: [],
    moreMovie: [],
    load_more: false
}

const MovieReducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_LIST_MOVIE_SUCCESS:
            return {
                ...state,
                list_movie: action.payload.data,
                leng: action.payload.data.length,
                page: action.payload.page,
                keyword: action.payload.keyword,
                loading_list_movie: false
            }

        case GET_LIST_MOVIE_REQUEST:
            return {
                loading_list_movie: true
            }

        case GET_DETAIL_MOVIE_SUCCESS:
            return {
                ...state,
                detail: action.payload,
                loading_detail_movie: false
            }

        case GET_DETAIL_MOVIE_REQUEST:
            return {
                loading_detail_movie: true
            }

        case SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                keyword: action.payload.keyword,
                suggestions: action.payload.data
            }
        case GET_MORE_MOVIE_REQUEST:
            return {
                ...state,
                loading_more: true
            }
        case GET_MORE_MOVIE_SUCCESS:
            return {
                ...state,
                moreMovie: action.payload.data,
                loading_more: false,
                page: action.payload.page,
                keyword: action.payload.keyword,
            }
        default: return state

    }
}

export default MovieReducer