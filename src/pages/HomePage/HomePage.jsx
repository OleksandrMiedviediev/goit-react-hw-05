import { useEffect, useState } from "react"
import MovieList from "../../components/MovieList/MovieList";
import {trendMovies} from "../../../movies"
import Loader from "../../components/Loading/Loader";
import css from './HomePage.module.css'

export default function HomePage() {
    
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        async function trendMoviesEffect(){
        try {
            setLoading(true);
            const data = await trendMovies()
            setMovies(data);
        } catch (error) {
            setError(true);
        } finally{
            setLoading (false)
        }
        }
        trendMoviesEffect()
    },[])



    return <div>
        <h1 className={css.title}>Trending today</h1>
        {loading&&<Loader/>}
        {error && <div>Error fetching movies.</div>}
        <MovieList movies={movies} />
    </div>;
    
}
