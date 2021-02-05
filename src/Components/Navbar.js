import React from 'react';
import BackDrop from './BackDrop';
import './styles/drawer.css';
import SideDrawer from './SideDrawer';
import { navLists } from './navlist';

const Navbar = () => {
  const [hide, setHide] = React.useState(true);
  const handleClick = (e) => {
    setHide(!hide);
  };
  const [smallSize, setSmallSize] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 670) {
        setSmallSize(false);
      } else {
        setSmallSize(true);
      }
    });
    return () => window.removeEventListener('resize');
  }, []);
  React.useEffect(() => {
    if (window.innerWidth > 670) {
      setSmallSize(false);
    } else {
      setSmallSize(true);
    }
  }, []);
  return (
    <>
      <nav className='nav'>
        {!smallSize ? (
          <ul className='nav-list'>
            {navLists.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        ) : (
          <div className='nav-toggler' onClick={handleClick}>
            <div className='links'></div>
            <div className='links'></div>
            <div className='links'></div>
          </div>
        )}
      </nav>
      {smallSize && (
        <>
          <BackDrop setHide={handleClick} hide={hide} />
          <SideDrawer hide={hide} />
        </>
      )}
    </>
  );
};

export default Navbar;
