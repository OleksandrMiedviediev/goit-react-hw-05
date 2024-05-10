import {Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import MoviesPage from '../../pages/MoviesPage/MoviesPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import MoviesDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
import MovieCast from '../MovieCast/MovieCast'
import MovieReviews from '../MovieReviews/MovieReviews'
import Layout from '../Layout/Layout'

export default function App() {

  return (
    <Layout>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MoviesDetailsPage/>}>
        <Route path='cast' element={<MovieCast />}/>
        <Route path='reviews' element={<MovieReviews />}/>
        </Route>
        <Route path='*' element = {<NotFoundPage />} />
      </Routes>

    </Layout>
  )
}
  