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

  const favButtonHandler= (e) => {
    e.preventDefault();

    // console.log(receivedPokemon)

    let sendingData = {
      pokeId: receivedPokemon.id,
      pokeName: receivedPokemon.species.name,
      imgUrl: receivedPokemon.sprites.front_default,
      author: sessionStorage.userId
    }

    const requestFavSave = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/poke/favorite`, data)
      console.log(request)
    } 

    requestFavSave(sendingData)
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
          {
            receivedPokemon.length !== 0 ?
            <div>
              <form onSubmit={favButtonHandler}>
                <RedButton type='submit' text='Save to Fav' />
              </form>
            </div>
            :
            null
          }
        </div>
        {
          receivedPokemon.length !== 0 ? 
          <PokeCard data={receivedPokemon} />
          :
          null
        }
      </div>
    </>

  );
}
export default SearchPoke;