// import axios from 'axios';
import { API_KEY,  BASE_URL} from 'constants';

// import { getImagePosterPath } from 'utils/defaultImage';



// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

// -------------------------------------------------
async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
};

export function getTrendingMovies() {
  return fetchMovies(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
};

export function getMovies(query) {
  return fetchMovies(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  )
};

export function getMovieDetails(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  )
};

export function getMovieCast(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  )
};

export function getReviews(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  )
};