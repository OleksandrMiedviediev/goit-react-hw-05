import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzRlMDMyZTI3NmI0NDUzNzI5Y2Y5MzRlOWY5M2RmNyIsInN1YiI6IjY2M2JiNGIzMDJmMGU4NmRiYWI1YzNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zlwVvhPCUdGY3MBIJW1YrqrRAfv753j1qum0M7x1Pe4",
  },
};

export const trendMovies = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );

  return response.data.results;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}?language=en-US`,
    options
    
  );
  return response.data;
  
};