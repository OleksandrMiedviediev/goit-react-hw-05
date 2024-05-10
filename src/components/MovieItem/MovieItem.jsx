import css from './MovieItem.module.css'

export default function MovieItem({movie}) {
    return (
        
        <div className={css.container}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={"movie.title"} width={400}/>
            <h2 className={css.text}>{movie.title}</h2>
            <p className={css.text}>{movie.release_date.slice(0,4)}</p>
        </div>
    )
}