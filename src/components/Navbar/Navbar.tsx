import React from 'react';
import { Bar, Link } from './Styles';


const Navbar = () => {
  return(
    <Bar>
      <Link to='/'>Pokédex</Link>
      <Link to='/about'>About</Link>
    </Bar>
  );
}

export default Navbar;