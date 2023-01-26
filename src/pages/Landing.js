import GoogleMaps from "./landingParts/GoogleMaps";

import { useState } from 'react';

const Landing = (props) => {

  const [ currentSection, setCurrentSection ] = useState('home')

  const linkHandler = (e, state) => {
    e.preventDefault();
    setCurrentSection(state);
  }

  const sectionSelector = (state) => {
    if (state === 'home') {
      return <p>landing</p>
    } 
    if (state === 'maps') {
      return <GoogleMaps />
    }
  }


  return (
    <>
      <p className="text-xl">Landing Page</p>
      <ul className="flex flex-row justify-center">
        <li onClick={(e) => linkHandler(e, 'home')} className='inline-block px-2 py-1 bg-red-400 text-white hover:bg-white hover:text-gray-900 border-2 hover:border-red-400'>Home</li>
        <li onClick={(e) => linkHandler(e, 'maps')} className='inline-block px-2 py-1 bg-red-400 text-white hover:bg-white hover:text-gray-900 border-2 hover:border-red-400'>Maps</li>
      </ul>
      <div>
        {sectionSelector(currentSection)}
      </div>
    </>
  );
}
export default Landing;