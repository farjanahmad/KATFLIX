import { Link, useParams } from "react-router-dom"

export default function Genre({movies}) {
    const {genre} = useParams();
    
    const genreId = {
        action : 28,
        romance : 10749,
        comedy : 35,
        thriller : 53
    } ;
    
    const filteredMovies = movies.filter(movie => movie.genre_ids.includes(genreId[genre])) ;

    return (
      <div className="genre-page">
  
          <h1 className="genre-logo">KATFLIX</h1>
          <Link to="/" className="genre-home-link">
              ← Back to Home
          </Link>
  
        <h1 className="genre-title"> {genre} movies </h1>
  
        <div className="genre-movie-grid">
        {filteredMovies.map((movie) => (
           <div className="genre-movie-card" key={movie.id}>
              <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 key={movie.title} >{movie.title}</h3>
           </div> 
          ))}
          </div>
      </div>
    )
  }
            



