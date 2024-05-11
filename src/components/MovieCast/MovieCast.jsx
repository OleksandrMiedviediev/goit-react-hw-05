import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { fetchMovieCast } from "../../../movies";
import css from './MovieCast.module.css'

export default function MovieCast() {
  const { movieId } = useParams(); 
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const castMemo = useMemo(() => cast, [cast]);

  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        const response = await fetchMovieCast(movieId); 
        setCast(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
    {loading && <Loader />}
    {error && <p>Error fetching cast.</p>}
    <div>
      <h2 className={css.text}>Cast</h2>
      <ul className={css.list}>
        {castMemo.map((actor) => (
        <li className={css.li} key={actor.id}>
<img className={css.image} src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultImg } alt={actor.name} width={150} height={225} />
          <p className={css.text}>{actor.name}</p>
          <p className={css.text}>{actor.character}</p>
        </li>
      ))}
      </ul>
    </div>
    </>
  );  
}