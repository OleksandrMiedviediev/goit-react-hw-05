
import css from './MovieItem.module.css'

export default function MovieItem({movie}) {

    const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

    return (
        
        <div className={css.container}>
            <img className={css.image} src={movie.backdrop_path?`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`:defaultImg} alt={"movie.title"} width={400}/>
            <h2 className={css.text}>{movie.title}</h2>
            <p className={css.text}>{movie.release_date.slice(0,4)}</p>
        </div>
    )
}