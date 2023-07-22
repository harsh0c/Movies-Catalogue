import React from 'react'
import { useParams } from "react-router-dom";
import SingleCard from '../../components/SingleCard/SingleCard';
import { useEffect, useState } from "react";
import axios from "axios";
import MyPagination from '../../components/Pagination/MyPagination';


const SearchPage = () => {

  const { type,search } = useParams();
  console.log(search)
  console.log(type)

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${(type==='TV') ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`
        // `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&include_adult=false&language=en-US&page=${page}`
      );
      setContent(data.results);
      setNumOfPages(Math.min(data.total_pages,500));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [search,page]);

  
  return (
    <div>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={(type==="TV")?"tv":"Movie"}
              vote_average={c.vote_average}
            />
          ))}
        {search &&
          !content &&
          (<h2>No Series Found</h2>)}
      </div>

      {numOfPages > 1 && (
        <MyPagination setPage={setPage} numOfPages={numOfPages} />
      )}

    </div>
  )
}

export default SearchPage