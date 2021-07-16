import React from 'react'
import {Carousel} from "react-bootstrap"
import {useState,useEffect} from 'react'

function MainHeader() {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1")
        .then(res=>(res.json()))
        .then(res=>{console.log(res.results)
        setMovies(res.results)
        })    
    },[])
    return (
    
    <div>
    {(movies[4])?<Carousel className="Carousel">
    <Carousel.Item className="Carousal-Parent">
        <img    
        className="Carousal-image"
        src={`https://image.tmdb.org/t/p/w1280/${movies[0].backdrop_path}`}
        alt="First slide"
        />
        <div className="Carousal-text">
            <h3 className="Movie-Name">{movies[0].title}</h3>
            <span>Release Date: {movies[0].release_date}</span><br></br>
            <span className="Movie-Desc" >{movies[0].overview}</span>
        </div>
        </Carousel.Item>
        <Carousel.Item className="Carousal-Parent">
        <img    
        className="Carousal-image"
        src={`https://image.tmdb.org/t/p/w1280/${movies[1].backdrop_path}`}
        alt="First slide"
        />
        <div className="Carousal-text">
            <h3 className="Movie-Name">{movies[1].title}</h3>
            <span>Release Date: {movies[1].release_date}</span><br></br>
            <span className="Movie-Desc" >{movies[1].overview}</span>
        </div>
        </Carousel.Item>
        <Carousel.Item className="Carousal-Parent">
        <img    
        className="Carousal-image"
        src={`https://image.tmdb.org/t/p/w1280/${movies[2].backdrop_path}`}
        alt="First slide"
        />
        <div className="Carousal-text">
            <h3 className="Movie-Name">{movies[2].title}</h3>
            <span>Release Date: {movies[2].release_date}</span><br></br>
            <span className="Movie-Desc" >{movies[2].overview}</span>
        </div>
        </Carousel.Item>
        <Carousel.Item className="Carousal-Parent">
        <img    
        className="Carousal-image"
        src={`https://image.tmdb.org/t/p/w1280/${movies[3].backdrop_path}`}
        alt="First slide"
        />
        <div className="Carousal-text">
            <h3 className="Movie-Name">{movies[3].title}</h3>
            <span>Release Date: {movies[3].release_date}</span><br></br>
            <span className="Movie-Desc" >{movies[3].overview}</span>
        </div>
        </Carousel.Item>
        <Carousel.Item className="Carousal-Parent">
        <img    
        className="Carousal-image"
        src={`https://image.tmdb.org/t/p/w1280/${movies[4].backdrop_path}`}
        alt="First slide"
        />
        <div className="Carousal-text">
            <h3 className="Movie-Name">{movies[4].title}</h3>
            <span>Release Date: {movies[4].release_date}</span><br></br>
            <span className="Movie-Desc" >{movies[4].overview}</span>
        </div>
        </Carousel.Item>
        <Carousel.Item className="Carousal-Parent">
        <img    
        className="Carousal-image"
        src={`https://image.tmdb.org/t/p/w1280/${movies[5].backdrop_path}`}
        alt="First slide"
        />
        <div className="Carousal-text">
            <h3 className="Movie-Name">{movies[5].title}</h3>
            <span>Release Date: {movies[5].release_date}</span><br></br>
            <span className="Movie-Desc" >{movies[5].overview}</span>
        </div>
        </Carousel.Item>
        <Carousel.Item className="Carousal-Parent">
        <img    
        className="Carousal-image"
        src={`https://image.tmdb.org/t/p/w1280/${movies[6].backdrop_path}`}
        alt="First slide"
        />
        <div className="Carousal-text">
    <h3 className="Movie-Name">{movies[6].title}</h3><span>Release Date: {movies[6].release_date}</span><br></br>
            <span className="Movie-Desc" >{movies[6].overview}</span>
        </div>
        </Carousel.Item>     
    </Carousel>:<h1>Loading........</h1>}
        </div>
    )
}

export default MainHeader
