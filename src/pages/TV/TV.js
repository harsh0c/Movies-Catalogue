import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleCard from '../../components/SingleCard/SingleCard';
import MyPagination from '../../components/Pagination/MyPagination';
import Genres from '../../components/Genres/Genres';
import useGenre from '../../hooks/useGenre';

function TV() {

  const [movies,setMovies]=useState([]);
  const [numOfPages,setNumOfPages]=useState(0)
  const [page,setPage]=useState(1);
  const [genres,setGenres]=useState([])
  const [selectedGenres,setSelectedGenres]=useState([])

  const genreURL=useGenre(selectedGenres);

  const fetchMovies=async ()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`);
    
    setMovies(data.results)
    setNumOfPages(Math.min(data.total_pages , 500))
    
  }

  useEffect(()=>{
    fetchMovies()
    // eslint-disable-next-line
  },[page,genreURL])

  return (
    <div>
        <span className='pageTitle'>TV Series</span>
        <Genres
          type="tv"
          setGenres={setGenres}
          genres={genres}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          setPage={setPage}
        />
        <div className='trending'>
            {movies && movies.map((sc)=>{
                return <SingleCard
                    key={sc.id}
                    id={sc.id}
                    poster={sc.poster_path}
                    title={sc.title || sc.name}
                    date={sc.first_air_date || sc.release_date}
                    media_type="tv"
                    vote_average={sc.vote_average}
                />
            })}
        </div>
        {numOfPages>1 && <MyPagination setPage={setPage} numOfPages={numOfPages}/>}
    </div>
  )
}

export default TV