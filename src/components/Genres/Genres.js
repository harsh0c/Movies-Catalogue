import { Chip } from '@mui/material';
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({type,setGenres,genres,selectedGenres,setSelectedGenres,setPage}) => {
  const fetchGenres=async ()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    setGenres(data.genres);
  }

  useEffect(()=>{
    fetchGenres();

    return ()=>{
        setGenres([]);
    }
    // eslint-disable-next-line
  },[])

  const handleAdd=(genre)=>{
    setSelectedGenres([...selectedGenres,genre]);
    setGenres(genres.filter(g=> g.id !== genre.id))
    setPage(1)
  }
  const handleRemove=(genre)=>{
    setGenres([...genres,genre]);
    setSelectedGenres(selectedGenres.filter(g=> g.id !== genre.id))
    setPage(1)
  }

  return (
    <div style={{padding:"6px 0"}}>
        {selectedGenres.map((genre)=>{
            return (
            <Chip
                label={genre.name}
                style={{margin: 2}}
                color='secondary'
                clickable
                onDelete={()=>handleRemove(genre)}
                key={genre.id}
            />)
        })}

        {genres.map((genre)=>{
            return (
            <Chip
                label={genre.name}
                style={{backgroundColor:"white",margin: 2}}
                clickable
                onClick={()=>handleAdd(genre)}
            />)
        })}
    </div>
  )
}

export default Genres