import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieDetailsModal from '../components/MovieDetailsModal';
const apiKey = 'a2b07930';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const searchMovies = async (page) => {
    if (searchTerm.trim() === '') {
      setMovies([]);
      return;
    }
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&page=${page}`
        );
        if(response.data.Response === "True") {
          setMovies(prevMovies => [...prevMovies, ...response.data.Search]);
          setTotalResults(response.data.totalResults);
        } else {
          alert('Фильм не найден.')
        }
    
      } catch (err) {
        console.error('Ошибка:', err);
      }
  };

  const handleSearch = () => {
      setMovies([]);
      setCurrentPage(1);
    searchMovies(1);
  };

  const handleSearch2 = () => {
    if(currentPage > 1){
        setCurrentPage(prevPage => prevPage - 1);
        setMovies([]);
    } else {
        setCurrentPage(1);
    }
    searchMovies(currentPage);
  };

    const handleSearchInput = (event) => {
      setSearchTerm(event.target.value)
        if (event.target.value.trim() === '') {
        setMovies([]);
        }
    };

  const handleMovieClick = (imdbID) => {
    getMovieDetails(imdbID);
  };

  const getMovieDetails = async (imdbID) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
      );
      setSelectedMovie(response.data);
      setShowModal(true);
    } catch (error) {
      console.error('Ошибка при получении сведений о фильме:', error);
    }
  };
  const handleCloseModal = () => {
      setShowModal(false);
      setSelectedMovie(null);
    };

  const loadMoreMovies = async () => {
    if(movies.length < totalResults){
        setCurrentPage(prevPage => prevPage + 1);
    }
      searchMovies(currentPage + 1);

  }
  useEffect(() => {
      if(movies.length > 0){
          console.log(movies.length)
      }
  }, [movies])
  useEffect(() => {
      if(searchTerm) {
          if(currentPage > 1) {
            searchMovies(currentPage)
        }
    }

}, [currentPage])
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Поиск фильмов</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Поиск фильма..."
          value={searchTerm}
          onChange={handleSearchInput}
          style={{ padding: '10px', marginRight: '10px', width: '300px' }}
        />
          <button id={'search-button'} onClick={handleSearch} style={{ padding: '10px' }}>Поиск</button>
          {searchTerm && <button onClick={handleSearch2} id={'search-button2'} style={{ padding: '10px', display: movies.length > 0 && currentPage > 1  ? 'inline-block' : 'none' }}>Назад</button> }
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie" style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', cursor: 'pointer', width: '200px' }} onClick={() => handleMovieClick(movie.imdbID)}
          >
          <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: '100%', height: 'auto' }} />
              <h3 style={{fontSize: '16px', marginTop: '5px'}}>{movie.Title}</h3>
          </div>
        ))}
      </div>
        {movies.length > 0 && movies.length < totalResults &&
        <button onClick={loadMoreMovies} style={{ marginTop: '20px', padding: '10px'}}>Загрузить больше</button> }
      <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} show={showModal}/>
    </div>
  );
};

export default Home;