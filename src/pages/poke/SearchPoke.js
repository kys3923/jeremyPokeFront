import { useState } from 'react';
import axios from 'axios';
import { RedButton } from '../../components/Buttons';

const SearchPoke = (props) => {

  const [ inputText, setInputText ] = useState('');

  const searchHandler = (e) => {
    setInputText(e.target.value)
  }

  const buttonHandler = (e) => {
    e.preventDefault();
    console.log('button clicked', inputText)
  }

  return (
    <>
      <div className='bg-red-200 w-screen h-screen'>
        <div className='flex flex-col items-center'>
          <p className='text-2xl'>Pokemon Search</p>
          <form onSubmit={buttonHandler} className='flex flex-col items-center'>
            <input type='search' onChange={searchHandler} className='py-1 px-4 rounded-md' />
            <RedButton type='submit' text='Search' />
          </form>
        </div>
        <div>
          <p>{inputText}</p>
        </div>
      </div>
    </>

  );
}
export default SearchPoke;