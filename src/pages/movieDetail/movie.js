import React, {useEffect,useState} from "react";
import "./movie.css"
import { useParams } from "react-router-dom";

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const {id} = useParams()
    const API_URL = "https://api.themoviedb.org/3"


    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])
    const getData = () =>{
        fetch(`${API_URL}/movie/${id}?api_key=051921b710103849b2b8586772f5b7d2&language=en-US`).then(res => res.json()).then(data => setMovie(data))
        console.log(currentMovieDetail)
    }
    return (
        <div>
        <div className="movie">
            <div className="sidebar">
                <section><span><i class="fa fa-television" aria-hidden="true"></i></span> LOGO</section>
                <p><span><i class="fa fa-home" aria-hidden="true"></i></span> Home</p>
                <p><span><i class="fa fa-film" aria-hidden="true"></i></span> Movies</p>
                <p><span><i class="fa fa-television" aria-hidden="true"></i></span> TV Series</p>
                <p><span><i class="fa fa-calendar" aria-hidden="true"></i></span> Upcoming</p>

                <div className="start_playing">
                    <p>Play movie quizes and earn free tickets</p>
                    <p className="people">50K people are playing now</p>
                    <p className="playing">Start playing</p>
                </div>
                <p className="logout"><span><i class="fa fa-sign-out" aria-hidden="true"></i></span> Log out</p>
            </div>
            <div className="movie__hero">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}/>
                <div className="movietitle">
                    
                <div data-testid = "movie-title">{currentMovieDetail ? currentMovieDetail.original_title : "" }</div>
                <div data-testid = "movie-release-date">{currentMovieDetail ?  currentMovieDetail.release_date : "" }
                    </div>  <div data-testid = "movie-runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                    <div className="genre">
                        <div className="genree">
                            <span>
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name + " "}</span></>
                                )) 
                                : 
                                ""
                            }
                            </span>
                            &nbsp;
                            <span>
                                <i className="star" class="fa fa-star" aria-hidden="true"></i> {currentMovieDetail ? currentMovieDetail.vote_average: ""} | {currentMovieDetail ? "(" + currentMovieDetail.vote_count + ")" : ""}
                            </span>
                            

                        </div>
                        

                        
                        
                        
                    
                    
                </div>
                
                
                </div>
                <div className="oo">
                    <div className="overview">
                    <span className="movie__overview" data-testid = "movie-overview">{currentMovieDetail ? currentMovieDetail.overview : ""}</span>

                    
                    </div>
                    <span className="overview__right">
                        <p className="showtimes"><i class="fa fa-ticket" aria-hidden="true"></i>&nbsp; See showtimes</p>
                        <p className="watchoptions"><i class="fa fa-list" aria-hidden="true"></i> &nbsp; More watch options</p>

                        <div className="bestmovies">
                            k
                        </div>
                    </span>

                </div>
                
                    <div className="credits">
                        <p>Directors: yada, yada, yada</p>
                        <p>Writers: yada, yada, yada</p>
                        <p>Stars: yada, yada, yada</p>
                    </div>
            </div>
            </div>
            
        </div>
        
        
    )
}
export default Movie
