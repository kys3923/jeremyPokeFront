import { useState, useEffect } from 'react';
import axios from 'axios';

const User = (props) => {

  // loading function
  // render if there is data in state
  
  const [ receivedData, setReceivedData ] = useState();
  const [ receivedPoke, setRecievedPoke ] = useState([]);
  const [ isPokeSectionOpen, setIsPokeSectionOpen ] = useState(false);
  
  // use useeffect to call the server <- delay!!!!! async await function
  useEffect(() => {
    let isLoading = true;
    
    const getUserInfo = async () => {
      let userId = sessionStorage.userId
      if(isLoading) {
        const request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/view/${userId}`)
        // save received data to state
        if (!!request.data.success) {
          setReceivedData(request.data.user)
          console.log(request.data.user)
        }
      }
    }
    
    return () => {
      getUserInfo();
      isLoading = false;
    }
  },[])
  
  const pokeBtnHandler = (e) => {

    let pokemons = []

    pokemons = receivedData.favPokemon
    
    let sendingData = {
      "user": receivedData._id,
      "pokemons": pokemons
    }

    const requestToApi = async (data) => {
      const request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/poke/favorite/view`, data);

      if(request.status === 200) {
        setRecievedPoke(request.data)
        setIsPokeSectionOpen(true)
      }
    }

    requestToApi(sendingData)
  }

  return (
    <div className='bg-yellow-200 flex flex-col'>
      <h2 className='text-2xl font-bold'>User Page</h2>
      {
        !!receivedData ?
        <div className='w-screen p-4'>
          <div className='flex flex-row'>
            <p className='pr-4'>username:</p>
            <p>{receivedData.username}</p>
          </div>
          <div className='flex flex-row'>
            <p className='pr-4'>email:</p>
            <p>{receivedData.email}</p>
          </div>
          <div className='flex flex-row'>
            <p className='pr-4'>address:</p>
            <p>{receivedData.address}</p>
          </div>
          <div className='flex flex-row'>
            <p className='pr-4'>contact:</p>
            <p>{receivedData.contact}</p>
          </div>
          <button onClick={pokeBtnHandler} className='py-1 px-3 bg-red-500 text-white rounded-md'>See Favortie Pokemon</button>
        </div>
        :
        <p>Loading...</p>
      }
      { receivedPoke.length > 0 ? <div>
        <ul>
          {receivedPoke.map((poke) => {
            return <li key={poke.id}>{poke.name}</li>
          })}
        </ul>
      </div> : null }
    </div>
  );
}
export default User;