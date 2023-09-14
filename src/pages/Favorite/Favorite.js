import React, { useContext } from 'react'
import {FContext} from "../../context/FContext"
import SingleCard from '../../components/SingleCard/SingleCard';

const Favorite = () => {

  const {favorites}=useContext(FContext);  // context
  return (
    <>
      {favorites.length ? (
        <div>
          <span className='pageTitle'>Favorites</span>
          
          <div className='trending'>
              {favorites && favorites.map((sc)=>{
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
        </div>
    ):(
      <h1>No Favorites added</h1>
    )}
    </>
  )
}

export default Favorite