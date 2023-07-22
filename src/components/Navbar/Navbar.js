import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from "./logo.png"
import "../../App.css"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function ButtonAppBar() {

  const navigate=useNavigate();
  const location=useLocation();
  const [search,setSearch]=React.useState('');  // search state

  console.log("rendered");
  

  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && search.length > 0) {

      if(location.pathname.includes("/movies")){
        navigate(`/search/movies/${search}`);
      }
      else{
        navigate(`/search/TV/${search}`);
      }
      
    }
};

  return (
    // <Box sx={{
    //       flexGrow: 1,
    //       width: "100%",
    //       position: "fixed",
    //       // bottom: 0,
    //       backgroundColor: "#2d313a",
    //       zIndex: 100,
    //     }}>
      <AppBar  sx={{
        // backgroundColor: "#2d313a",
        backgroundColor: "#190D2E",
        width: "100%",
        position: "fixed",
        zIndex: 100,
      
      }}>
        <Toolbar>
          <Box sx={{display: 'flex', justifyContent: 'space-around',alignItems: 'center',width: 1,flexWrap:'wrap',mt:1}}>

            <img src={logo} alt='movieception' className='logo' onClick={()=>{navigate("/"); window.scroll(0, 0)}}/>

            <Typography variant="h6" component="div">
              <Link to="/movies" style={{textDecoration:"none",color: "#C79F27",display:"flex",flexDirection:"column",alignItems:"center"}}>
              <MovieIcon />MOVIES
              </Link>
            </Typography>

            <Typography variant="h6" component="div"> 
              <Link to="/TV" style={{textDecoration:"none",color: "#C79F27",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <TvIcon/>TV
              </Link>
            </Typography>

            <Typography variant="h6" component="div"> 
              <Link to="/TV" style={{textDecoration:"none",color: "#C79F27",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <FavoriteIcon/>Favorite
              </Link>
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                
                onChange={event=>setSearch(event.target.value)}
                onKeyUp={searchQueryHandler}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    // {/* </Box> */}
  );
}
