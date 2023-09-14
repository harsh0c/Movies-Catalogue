import React, { useContext } from 'react'
import { img_300, unavailable } from '../../config/config'
import "./SingleCard.css"
import { Badge } from '@mui/material'
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {FContext} from "../../context/FContext";

function SingleCard({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    sc,
}) {

  const {favorites,add,remove}=useContext(FContext);  //  context

  return (
    <div className='media'>
        <Badge badgeContent={vote_average} color={vote_average>6 ? 'primary' : "secondary"}></Badge>

        {favorites?.find((m)=> m.id === sc.id) ? (
          <div className='favorite-btn' onClick={()=> remove(sc)}>
            <Favorite color="primary" />
          </div>
        ): (
          <div className='favorite-btn' onClick={()=> add(sc)}>
            <FavoriteBorderIcon color="gray" />
          </div>
        )}

        <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
        <b className='title'>{title}</b>
        <span className='subTitle'>{media_type==='tv' ? "TV Series" : "Movie"}
            <span className='subTitle'>{date}</span>
        </span>
    </div>
  )
}

export default SingleCard