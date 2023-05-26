const key = 'cf0d5d1497716d264f1aff696bc38398'

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27&language=en-US&page=1`,
}

export default requests
