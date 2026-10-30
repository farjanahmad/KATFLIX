import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const{ searchQuery, setSearchQuery, handleSearch } = props;
    const [menuOpen, setMenuOpen] = useState(false) ;

  return (
    
       <nav>
         <Link to="/" className="logo">
           <h1>KATFLIX</h1>
         </Link>

         
           <div className="navbar-search" id="Search-bar">
            <input 
               className='search-input'
               type="text"
               placeholder="search movies"
               value={searchQuery}
               onChange={(e) => {setSearchQuery(e.target.value)}}
                />

                <button
                  className='search-button'
                 onClick={handleSearch}
                  >
                    🔎
                    </button>
            </div>

              

            <div className="menu-wrapper">
            <button className="hamburger" 
            onClick={() => setMenuOpen(!menuOpen)}>
                 ☰
              </button>

          {menuOpen && (
            <div className="nav-menu">
              <Link to="/About" className="ABOUT-link">
                ABOUT
              </Link>

              <Link to="/" className="home-link">
                HOME
              </Link>
          </div>
        )}
      </div>
      
            
               </nav>
)}


       








