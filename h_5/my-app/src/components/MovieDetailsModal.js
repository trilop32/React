import React from 'react';

const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
         style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '600px',
            maxHeight: '80%',
            overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
          <button
             style={{ float: 'right' }}
              onClick={onClose}
            >
              Закрыть
          </button>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: '100%', maxHeight: '250px', objectFit: 'contain' }} />
        <p>Год: {movie.Year}</p>
        <p>Рейтинг: {movie.imdbRating}</p>
        <p>Жанр: {movie.Genre}</p>
        <p>Сюжет: {movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetailsModal;