import React, { useEffect } from 'react';
import './App.css';
import { getISSPeople } from './utils/getISSPeople';



function App() {
  useEffect(() => {
    getISSPeople().then(data => console.log(data));
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
