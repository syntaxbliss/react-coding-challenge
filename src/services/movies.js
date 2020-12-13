const baseParams = new URLSearchParams({
  api_key: process.env.REACT_APP_API_KEY,
  language: 'en-US',
  sort_by: 'popularity.desc',
  include_adult: false,
  include_video: false,
  page: 1,
});

class MoviesService {
  static discover() {
    const params = baseParams.toString();

    return fetch(`${process.env.REACT_APP_API_URL}/discover/movie?${params}`).then(res => res.json());
  }

  static search(query) {
    const additionalParams = new URLSearchParams({ query });
    const params = `${baseParams.toString()}&${additionalParams.toString()}`;

    return fetch(`${process.env.REACT_APP_API_URL}/search/movie?${params}`).then(res => res.json());
  }

  static getGenres() {
    const params = new URLSearchParams({ api_key: process.env.REACT_APP_API_KEY, language: 'en-US' });

    return fetch(`${process.env.REACT_APP_API_URL}/genre/movie/list?${params}`).then(res => res.json());
  }
}

export default MoviesService;
