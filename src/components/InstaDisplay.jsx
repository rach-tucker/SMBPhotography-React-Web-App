import React from 'react';
import InstaFetch from '../components/InstaFetch';

const InstaDisplay = () => {
  return (
    <>
      <header className="App-header" style={{textAlign:'center'}}>
        <h1>Instagram Feed with Instagram API</h1>
      </header>

      <InstaFetch token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
    </>
  );
}

export default InstaDisplay;