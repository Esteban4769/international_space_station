import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './utils/reduxHooks';
import * as peopleActions from './features/people';
import * as positionActions from './features/position';


function App() {
  const dispath = useAppDispatch();
  const { people, position } = useAppSelector(state => state);

  const loadInfo = async () => {
    dispath(peopleActions.fetchData());

    dispath(positionActions.fetchData());
  };

  useEffect(() => {
    loadInfo();

    const fetchInterwal = setInterval(loadInfo, 5000);

    return (() => {
      clearInterval(fetchInterwal);
    });
  }, [])

  return (
    <div className="App">
      {JSON.stringify(people.data)}
      <br /><br />
      {JSON.stringify(position.data)}
    </div>
  );
}

export default App;
