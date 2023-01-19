import { useState } from 'react';
import axios from 'axios';
import { RedButton } from '../../components/Buttons';
import PokeCard from './PokeCard';

const SearchPoke = (props) => {

  const [ inputText, setInputText ] = useState('');
  const [ receivedPokemon, setReceivedPokemon ] = useState([]);

  const searchHandler = (e) => {
    setInputText(e.target.value)
  }

  const buttonHandler = (e) => {
    e.preventDefault();

    const searchRequest = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/poke/search/${data}`)
      console.log(request)      

      if(request.statusText === 'OK') {
        setReceivedPokemon(request.data)
      }
    }
    searchRequest(inputText)
  }

  return (
    <>
      <div className='bg-red-200 w-screen p-12'>
        <div className='flex flex-col items-center'>
          <p className='text-2xl'>Pokemon Search</p>
          <form onSubmit={buttonHandler} className='flex flex-col items-center'>
            <input type='search' onChange={searchHandler} className='py-1 px-4 rounded-md' />
            <RedButton type='submit' text='Search' />
          </form>
        </div>
        {
          receivedPokemon.length !== 0 ? 
          <PokeCard data={receivedPokemon} />
          :
          null
        }
        <div>
          <form>
            <RedButton type='submit' text='Save to Fav' />
          </form>
        </div>
      </div>
    </>

  );
}
export default SearchPoke;