import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx'

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=d0a23368';

const App=()=> {
    
    const searchMovies= async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`) ;
        const data = await response.json();

        setMovies(data.Search);
    }

    const [movies,setMovies]=useState([]);
    const [searchItem,setSearchItem]=useState('');

    useEffect(()=>{
        searchMovies("Your"); 
    },[]);

    return(
        <div className="app">
             <h1>MoviesTime</h1>
             <div className="search">
                <input
                    placeholder="Type to search"
                    value={searchItem}
                    onChange={(e)=>{setSearchItem(e.target.value)}}
                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{ searchMovies(searchItem)}}
                />
             </div>

             {
                movies?.length>0 ?
                (
                    <div className="container">
                        {movies.map((movie)=> (
                            <MovieCard movie={movie}/>
                        ))}
                        
                    </div>

                ): (
                    <div className="empty">
                        <h2>Nothing Found</h2>
                    </div>
                )
             }
             
        </div>
       
    );
}

export default App;