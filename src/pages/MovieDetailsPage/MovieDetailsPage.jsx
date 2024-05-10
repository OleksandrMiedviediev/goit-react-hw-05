import { useState, useEffect, useRef } from "react";
import { useParams, Outlet, useLocation, Link } from "react-router-dom";
import { getMovieById } from "../../../movies";
import Loader from "../../components/Loader/Loader"
import MovieCard from '../../components/MovieCard/MovieCard'
import css from './/MovieDetailsPage.module.css'
import { FaArrowLeft } from "react-icons/fa";

export default function MoviesDetailsPage() {

    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const{movieId} = useParams();
    const location = useLocation();
    const backLinkURLRef = useRef(location.state ?? "/movies");
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
            <Link to={backLinkURLRef.current} className={css.linkDescr}>
                  <p><FaArrowLeft />Go back</p></Link>
            {error && <div>Error fetching movies.</div>}
            <div className={css.container}>
            {movie && 
              <MovieCard movie={movie}/>
              
            }
            <Outlet />
            </div>
        </div>
        
        )
}