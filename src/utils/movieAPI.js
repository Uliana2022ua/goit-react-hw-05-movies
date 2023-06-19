import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants';
import { getImagePosterPath } from 'utils/defaultImage';



export async function getTrendingMovies(page, controller) {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`,
    { signal: controller.signal }
  );

  const movies = response.data.results.map(({ id, title, poster_path }) => {
    return {
      id,
      title,
      posterPath: getImagePosterPath(poster_path),
    };
  });

  return { movies, totalPages: response.data.total_pages };
}

export async function getMovieDetails(movieId, controller) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
    { signal: controller.signal }
  );

  const { title, poster_path, overview, genres, vote_average, release_date } =
    response.data;

  return {
    title,
    posterPath: getImagePosterPath(poster_path),
    overview,
    genres: genres.map(genre => genre.name).join(', '),
    vote: vote_average.toFixed(1),
    year: release_date.slice(0, 4),
  };
}

export async function getMovieCast(movieId, controller) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    { signal: controller.signal }
  );

  const actors = response.data.cast.map(
    ({ id, name, profile_path, character }) => {
      return {
        id,
        name,
        profilePath: getImagePosterPath(profile_path),
        character,
      };
    }
  );

  return actors;
}

export async function getReviews(movieId, controller) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
    { signal: controller.signal }
  );

  const reviews = response.data.results.map(({ id, author, content }) => {
    return {
      id,
      author,
      content,
    };
  });

  return reviews;
}

export async function getMovies(query, page = 1, controller) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
    { signal: controller.signal }
  );

  const movies = response.data.results.map(({ id, title, poster_path }) => {
    return {
      id,
      title,
      posterPath: getImagePosterPath(poster_path),
    };
  });

  return {
    movies,
    totalPages: response.data.total_pages,
    totalResults: response.data.total_results,
  };
}