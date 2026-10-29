import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="about-container">
        <div className="about-navbar">
            <h1>KATFLIX</h1>
            <Link to="/" className="about-home-link"> HOME </Link>
        </div>
     <div className="about-title"> 
            <h1 className="about-h1">
             Your next favourite movie starts from here.
            </h1>
            <p className="about-description">
            Discover movies, explore genres, and find your next favourite film. KATFLIX makes your next movie night easier.
            </p>
      </div>
    </div>
    )
}
        

    

