const express = require('express');
const router = express.Router();

const apiKey = 'c280e9e8ef5a3f512e0c5859dc76de7c';


async function getMovies(baseUrl) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default; // Assuming the default export is 'fetch'
  const url = `${baseUrl}?api_key=${apiKey}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

router.get('/', async (req, res) => {
  try {
    res.render('Home')
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching movies");
  }
});
router.get('/upcoming-movies', async(req, res) => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/upcoming';
  const upcomingMovies = await getMovies(baseUrl);
  res.render('Movies', { movies: upcomingMovies, genres: 'Upcoming Movies' })
});

router.get('/now-playing-movies', async(req, res) => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing';
  const playingMovies = await getMovies(baseUrl);
  res.render('Movies', { movies: playingMovies, genres: 'Now Playing'})
});


router.get('/popular-movies', async(req, res) => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/popular';
  const popularMovies = await getMovies(baseUrl);
  res.render('Movies', { movies: popularMovies, genres: 'Popular Movies' })
});


router.get('/top-rated-movies', async(req, res) => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/top_rated';
  const topRated = await getMovies(baseUrl);
  res.render('Movies', { movies: topRated, genres: 'Top Rated Movies'})
});

router.get('/airing-today', async(req, res) => {
  const baseUrl = 'https://api.themoviedb.org/3/tv/airing_today';
  const data = await getMovies(baseUrl);
  res.render('Movies', { movies: data, genres: 'Series Airing Today'})
});
router.get('/top-rated-series', async(req, res) => {
  const baseUrl = 'https://api.themoviedb.org/3/tv/top_rated';
  const data = await getMovies(baseUrl);
  res.render('Movies', { movies: data, genres: 'Top Rated Series'})
});

router.get('/popular-series', async(req, res) => {
  const baseUrl = 'https://api.themoviedb.org/3/tv/popular';
  const data = await getMovies(baseUrl);
  res.render('Movies', { movies: data, genres: 'Popular Series'})
});

router.get('/on-the-air', async(req, res) => {
  const baseUrl = 'https://api.themoviedb.org/3/tv/on_the_air';
  const data = await getMovies(baseUrl);
  res.render('Movies', { movies: data, genres: 'Series On The Air'})
});



module.exports = router;
