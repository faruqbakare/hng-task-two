import React, {useEffect, useState} from "react"
import "./searchBar.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
    const API_URL = "https://api.themoviedb.org/3"
    const [searchInput, setSearchInput] = useState('')
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()
    const Trigger = (e) => {
        setSearchInput(e.target.value)
    }
    
    const searchMovie = async (e) =>{
        e.preventDefault()
        console.log("searching")
        try{
            const response = await axios.get(`${API_URL}/search/movie?api_key=051921b710103849b2b8586772f5b7d2&language=en-US&query=${searchInput}`)
            setMovies(response.data.results)
            console.log(movies)
        } catch (error){
            console.error(error)
        }
    }
    const movieClick = (movieId) => {
        navigate (`/movies/${movieId}`)
    }
        
    
    
    return (
    <div className="sea">
        <form onSubmit={searchMovie}>
            <label htmlFor="searchInput">Search</label>
            <input className="inputtext" type="text" id="searchInput" value={searchInput} onChange={Trigger} placeholder="What do you want to watch?"
            />
            <button type="submit"><i id="icon" class="fas fa-search"></i></button>

        </form>
      
    </div>
)

}


export default SearchBar

