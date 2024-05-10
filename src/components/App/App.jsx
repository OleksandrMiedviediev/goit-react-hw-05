import {Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import MoviesPage from '../../pages/MoviesPage/MoviesPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import MoviesDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
import Layout from '../Layout/Layout'
import './App.module.css'

export default function App() {

  return (
    <Layout>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MoviesDetailsPage/>} />
        <Route path='*' element = {<NotFoundPage />} />
      </Routes>

    </Layout>
  )
}
  