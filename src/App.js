import React from 'react';
import data from './data';
import Folder from './Folder';

const App = () => {
  return (
    <div style={{ margin: '20px' }}>
      <Folder data={data} />
    </div>
  );
};

export default App;
