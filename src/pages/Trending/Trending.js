import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleCard from '../../components/SingleCard/SingleCard';
import "./Trending.css"
import MyPagination from '../../components/Pagination/MyPagination';

function Trending() {

  const [trend,setTrend]=useState([]);
  const [page,setPage]=useState(1);

  const fetchTrending= async ()=>{
    const {data}= await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    // console.log(data);
    setTrend(data.results);
  }
  useEffect(()=>{
    fetchTrending();
    // eslint-disable-next-line
  },[page])

  return (
    <div>
        <span className='pageTitle'>Trending</span>
        <div className='trending'>
            {trend && trend.map((sc)=>{
                return <SingleCard
                    key={sc.id}
                    id={sc.id}
                    poster={sc.poster_path}
                    title={sc.title || sc.name}
                    date={sc.first_air_date || sc.release_date}
                    media_type={sc.media_type}
                    vote_average={sc.vote_average}
                    sc={sc}
                />
            })}
        </div>
        <MyPagination setPage={setPage}/>
    </div>
  )
}

export default Trending