import {React, useEffect, useState} from "react";
import axios from "axios";
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import SearchBar from "../../components/searchbar/searchBar";

const Home = () => {
    
    const API_URL = "https://api.themoviedb.org/3"
    const [popularMovies, setPopularMovies] = useState([])
    

  
    useEffect(() => {
        fetch(`${API_URL}/movie/popular?api_key=051921b710103849b2b8586772f5b7d2&language=en-US`).then(res => res.json()).then(data => setPopularMovies(data.results))
    

    }, [])
    console.log(popularMovies)

    return (
        <>

            <div className= "poster">
                <Carousel 
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}>
                    {
                popularMovies.map(movie => (
                    <Link style={{textDecoration: "none", color: "white"}} to ={''}>
                    <div className="posterImage">
                        <div className="searchbar">
                            
                        </div>
                        <SearchBar/>
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                        
                    </div>
                    <div className="posterImage__overlay">
                        <div className="posterImage__title">{movie ? movie.original_title:""}</div>
                        <div className="posterImage__runtime">
                            
                            <div className="posterImage__description">{movie ? movie.overview : ''}</div>
                            
                        </div>
                    </div>
                    </Link>
                ))
            }


                </Carousel>
            </div>
            <div><MovieList/></div>
            

            
        
        </>
    )
}
export default Home