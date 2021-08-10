import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetListMovie, GetMore } from '../../redux/action/movieAction'
import MovieCard from './cardMovie'
import Loading from '../../components/loading/loading'


export default function ContainerMovie() {
    const dispatch = useDispatch()

    const loading_list_movie = useSelector(state => state.movie.loading_list_movie)
    const list_movie = useSelector(state => state.movie.list_movie)
    const newPage = useSelector(state => state.movie.page)
    const moreMovie = useSelector(state => state.movie.moreMovie)



    // state
    const [page, setpage] = useState(1);
    const [title, settitle] = useState("batman");
    const [genre, setgenre] = useState('');
    const [year, setyear] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        dispatch(GetListMovie(title, genre, year, page))
        setpage(newPage)

    }, []);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreMovies();

    }, [isFetching]);
    const handleScroll = () => {
        // if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight) return;
        if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    const fetchMoreMovies = () => {
        setTimeout(() => {
            dispatch(GetMore(title, genre, year, newPage))
            setIsFetching(false);
        }, 1000);

    }

    var movie = list_movie
    if (moreMovie !== undefined && moreMovie.length > 0) {
        let newlistmovie = [...movie, ...moreMovie]
        movie = newlistmovie
    }
    return (
        <div className="row">
            {
                loading_list_movie === true ?
                    <><Loading /></>
                    :
                    movie && movie.length > 0 && loading_list_movie === false ?
                        <>
                            { movie.map((val, i) => (
                                <MovieCard key={i} movie={val} />
                            ))
                            }
                        </>
                        :
                        ""
            }
            {
                isFetching === true ?
                    <Loading />
                    :
                    moreMovie && moreMovie.length > 0 ?
                        <div>No More...</div>
                        :
                        null
            }
        </div>
    )
}
