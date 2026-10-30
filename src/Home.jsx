import React from 'react'
import Navbar from './Navbar';
import './App.css';
import {getMovies, searchMovies} from './movieApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
const [noResults, setNoResults] = useState(false);
const [movies, setMovies] = useState([]); 
const [selectedMovie, setSelectedMovie] = useState(null);
const [searchQuery, setSearchQuery] = useState('');
const [recentMovieIds, setRecentMovieIds] = useState([]);

useEffect(() => {
  const loadMovies = async () => {
    const data = await getMovies();
    console.log(data);
    setMovies(data);
  };
   loadMovies(); 
  }, []); 

  async function handleSearch(){
    if(!searchQuery){
      return;
    }
    
    setSelectedMovie(null);
      const results = await searchMovies(searchQuery);
      setMovies(results);
      if(searchQuery && results.length === 0){
        setNoResults(true);
      }else{
        setNoResults(false);
      }
    }

    function handleSurprise(){
      if(movies.length < 2){
        return ;
      }
   
      let RandomIndex = Math.floor(Math.random() * movies.length);
      while(selectedMovie !== null && 
            movies[RandomIndex].id === selectedMovie.id){
              RandomIndex = Math.floor(Math.random() * movies.length);
            }
            setSelectedMovie(movies[RandomIndex]);
          }
          
          return (
              <div>
             <>
            <Navbar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
                />

            <div className='surprise-section'>
              <h2> CAN'T DECIDE WHAT TO WATCH</h2>
              <p> Discover your next favourite movie.</p>
        
                <button 
                    className='surprise-button'
                    onClick={handleSurprise}
                    >
                  SURPRISE ME
                  </button>
            </div>
        <div className='genre-section'>
          <h2>EXPLORE BY GENRE</h2>
          <p>Choose what you feel like watching</p>
  
          <div className='genre-card'>
          <Link to="/genre/action">ACTION</Link>
          <Link to="/genre/romance">ROMANCE</Link>
          <Link to="/genre/comedy">COMEDY</Link>
          <Link to="/genre/thriller">THRILLER</Link>
          </div>
        </div>
  
        
         <h2 className='popular-movies'>POPULAR ON KATFLIX</h2>
        
         {noResults &&(
             <p>NO MOVIES FOUND</p>
          )}
        
          <div className="movie-container">   
          {movies.map((movie) =>{   
              return (
                  <div key={movie.id} 
                  className="movie-card"
                  onClick={() => {
                      setSelectedMovie(movie);
                  }}>
        
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}/>  
                  <p className='movie-title'>{movie.title}</p>
              </div>
            );  
          })}
        </div>
        
          {selectedMovie && (
              <div className="movie-details">
        
                <img className='movie-details-poster' src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                alt={selectedMovie.title} />
        
                <div className="movie-info">
                <h2>{selectedMovie.title}</h2>
        
                <p className="movie-overview">
                  {selectedMovie.overview}
                  </p>
        
                <p className="movie-rating">
                  Rating: {selectedMovie.vote_average}
                  </p>
        
                <p className="movie-release-date">
                  Release Date: {selectedMovie.release_date}
                  </p>
                </div>
        
               </div>
               
              )}
        </>
      </div>
      )
  }
        
                
        
        
        
                
          
          
              
        
              
  
           
  

      


  


    
        
