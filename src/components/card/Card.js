import React, {useEffect, useState} from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "./card.css"

import { Link } from "react-router-dom";

const Cards = ({movie}) =>  {
    const [isLoading, setIsLoading] = useState(true)
    useEffect (() => {
        setTimeout(() =>{
            setIsLoading(false)
        }, 1500)
    }, [])

    return <>
    {
        
        <Link to={`movie/${movie.id}`} style = {{textDecoration:'none', color: 'white'}}>
            <div className="cards" data-testid = "movie-card">
                <div className="img_container"><img data-testid = "movie-poster" className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/></div>

                
                
                <div className="cards__overlay">
                    <div className="info">
                        <div className="cards__title" data-testid="movie-title">{movie?movie.original_title:""}</div>

                    <div className="rel_date" data-tesid="movie-release-date">{movie?movie.release_date:''}</div>

                    </div>
                    
                    
                </div>
            </div>
        </Link>
    }
    </>
}
export default Cards