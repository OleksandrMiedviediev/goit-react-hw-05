import { useEffect, useState } from "react"
import MovieList from "../../components/MovieList/MovieList";
import {trendMovies} from "../../../movies"


export default function HomePage() {
    
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function trendMoviesEffect(){
            try {
                setLoading(false)
                const data = trendMovies()
                setMovies(data);
            } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
        }
        trendMoviesEffect()
    },[])
    return <div>
        <h1>HomePage</h1>
        <MovieList movies={movies} />
    </div>;
}