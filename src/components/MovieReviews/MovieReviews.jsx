import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { fetchMovieReviews } from "../../../movies";
import css from './MovieReviews.module.css'

export default function MovieReviews() {
  const { movieId } = useParams(); 
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const castMemo = useMemo(() => reviews, [reviews]);



  
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await fetchMovieReviews(movieId); 
        setReviews(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
    {loading && <Loader />}
    {error && <p>Error fetching reviews.</p>}
    <div>
      <h2 className={css.text}>Reviews</h2>
      <ul>
        {castMemo.map((feedback) => (
        <li key={feedback.id}>
          <p className={css.text}>{feedback.author}</p>
          <p>{feedback.content}</p>
        </li>
      ))}
      </ul>
    </div>
    </>
  );  
}