import React from 'react';

const BackDrop = ({ setHide, hide }) => {
  return <div className={`backdrop ${hide && 'hide'}`} onClick={setHide}></div>;
};

export default BackDrop;
