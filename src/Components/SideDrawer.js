import React from 'react';
import { navLists } from './navlist';

const SideDrawer = ({ hide }) => {
  return (
    <div className={`side-drawer ${hide && 'hide'}`}>
      <ul className='sidebar'>
        {navLists.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default SideDrawer;
