import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../../movies";
import Loader from "../../components/Loading/Loader";
import MovieCard from '../../components/MovieCard/MovieCard'

export default function MoviesDetailsPage() {

    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const{movieId} = useParams();

    useEffect (()=>{
    async function fetchMovie(movieId){
        try {
            setLoading(true)
            const data = await getMovieById(movieId)
            setMovie(data)
        } catch (error) {
            setError(true)
        }finally{
            setLoading(false)
        }
    }
        fetchMovie(movieId)
    },[movieId])

    return (   
        <div>
            {loading&&<Loader/>}
            {error && <div>Error fetching movies.</div>}
            {movie && 
              <MovieCard movie={movie}/>
            }
        </div>
        )
}