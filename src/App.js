import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Movie from './pages/Movies/Movie';
import TV from './pages/TV/TV'
import Trending from './pages/Trending/Trending';
import { Container } from '@mui/material';
import SearchPage from './pages/Search/SearchPage';
import PageNotFound from './pages/404/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Container>
          <Routes>
            <Route path='/' element={<Trending/>}></Route>
            <Route path='/movies' element={<Movie/>}></Route>
            <Route path='/TV' element={<TV/>}></Route>
            <Route path='/search/:type/:search' element={<SearchPage/>}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          </Container>
      </Router>
    </div>
  );
}

export default App;
