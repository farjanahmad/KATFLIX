import { useState, useEffect } from 'react';
import { getMovies } from './movieApi';
import Genre from './Genre';
import { Route,Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';

export default function App(){
  const [movies, setMovies] = useState([]); 
  
  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovies();
      console.log(data);
      setMovies(data);
    };
     loadMovies(); 
    }, []); 
  return (
    <>

    <Routes>
    <Route
     path="/" 
     element={<Home/>} 
     />

    <Route 
      path='/About' 
      element={<About/>} 
      />

    <Route
     path='/genre/:genre' 
     element={<Genre movies={movies}/>} 
     />
    </Routes>
    </>
)}




      





    


