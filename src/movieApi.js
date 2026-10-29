import.meta.env.VITE_TMDB_API_KEY;



export async function getMovies() {

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`;
const response = await fetch(url);
if (!response.ok) {
  throw new Error("Failed to fetch popular movies");
}

const data = await response.json();
return data.results;

}

export async function searchMovies(query) {

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const response = await fetch(url);
  if (!response.ok){
      throw new Error("Failed to search movies");
    }
    const data = await response.json();
    
    return data.results;
  }
 


