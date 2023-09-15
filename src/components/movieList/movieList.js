import React, {useEffect, useState} from "react";
import Cards from "../card/Card";
import "./movieList.css"
import { useParams } from "react-router-dom";

const MovieList = () =>{
    const API_URL = "https://api.themoviedb.org/3"
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        getData()

    }, [type])
    const getData = () =>{
        fetch(`${API_URL}/movie/popular?api_key=051921b710103849b2b8586772f5b7d2&language=en-US`).then(res => res.json()).then(data => setMovieList(data.results))
    }
    return (
        <div className="movie__list">
            <h2 className="list__title">POPULAR</h2>
            <div className="list__cards">
                {
                    movieList.map(movie =>(
                        <Cards movie={movie} data-testid = "movie-card" />
                    ))
                }
                </div>
        </div>
    )
}
export default MovieList