import { useState } from 'react';

import MovieSearch from './MovieSearch';

const MovieLanding = (props) => {

  const [ currentSection, setCurrentSection ] = useState('search')

  const sectionDistributor = (page) => {
    if(page==='search') {
      return <MovieSearch />
    }
  }

  return (
    <>
      {sectionDistributor(currentSection)}
    </>
  );
}
export default MovieLanding;