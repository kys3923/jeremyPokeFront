import { useState } from 'react';
import axios from 'axios';

const MovieSearch = (props) => {

  const [ inputtedText, setInputtedText ] = useState('');
  const [ receivedMovie, setReceivedMovie ] = useState();

  const inputTypeHandler = (e) => {
    setInputtedText(e.target.value);
  }

  const buttonHandler = (e) => {
    e.preventDefault();
    
    let sendingData = {
      movie: inputtedText,
    }

    const requestToApi = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/movie/search`, data);

      if (request.status === 200) {
        console.log(request, 'clicked')
        setReceivedMovie(request.data.movie)
      }
    }

    requestToApi(sendingData);
  }

  const favButtonHandler = (e, movie) => {
    e.preventDefault();
    console.log(movie)

    let sendingData = {
      imdbId: movie,
      title: receivedMovie.Title,
      actors: receivedMovie.Actors,
      director: receivedMovie.Director,
      writer: receivedMovie.Writer,
      genre: receivedMovie.Genre,
      released: receivedMovie.Released,
      imgUrl: receivedMovie.Poster,
      author: sessionStorage.userId
    }

    const requestToApi = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/movie/addToFav/${data.imdbId}`, sendingData)
      console.log(request)
    } 

    requestToApi(sendingData)
  }

   return (
    <>
      <h1>Search your favortie movie</h1>
      <form onSubmit={buttonHandler}>
        <input type='text' className="border-2 px-4 py-2" onChange={inputTypeHandler} />
        <button type='submit'>Search</button>
      </form>
      { !!receivedMovie ?
        <div>
          <img src={receivedMovie.Poster} />
          <ul>
            <li>Title: {receivedMovie.Title}</li>
            <li>Actors: {receivedMovie.Actors}</li>
            <li>Director: {receivedMovie.Director}</li>
            <li>Writer: {receivedMovie.Writer}</li>
            <li>Genre: {receivedMovie.Genre}</li>
            <li>Released: {receivedMovie.Released}</li>
          </ul>
          <button onClick={(e) => favButtonHandler(e, receivedMovie.imdbID)} className='px-4 py-2 bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-2 hover: border-red-600'>Add to Favorite</button>
        </div> 
      : 
        null 
      }
    </>
  );
}
export default MovieSearch;