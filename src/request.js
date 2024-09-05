const API_KEY = "68ab438d97adfa94cb0ed088d061440b";

const requests = {
    fetchTrending: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_original_language=en`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchTopRated: `/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=1000`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_companies=2`,    
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
    fetchDCMovies: `/search/company?api_key=${API_KEY}&query=dc%20films`,
    fetchAnime: `/discover/tv?api_key=${API_KEY}&with_genres=16&with_original_language=ja`, 
    fetchMarvelMovies: `/discover/movie?api_key=${API_KEY}&with_companies=420`,
    fetchTopRatedTeluguMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=te&sort_by=vote_average.desc&vote_count.gte=50`,
    
};

export default requests;
