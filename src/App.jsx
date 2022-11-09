import React, { useState } from 'react';
import './App.css';
import BasicParameters from './component/basic-parameters';
import NickName from './component/nickName';
import ProgressBar from './component/progress-bar';

function App() {
  const [ lifePower, setLifePower ] = useState(3)

  const leftLife = () => {
      setLifePower( lifePower - 1 );
    if ( lifePower <= 1){
      document.write("Sorry, but you are died")
      console.log('F')
    };
  }

  const power = lifePower - 3;

  const testData = [
  { bgcolor: "green", completed: lifePower }
  ];


  return (
    <div className="App">
      <div>
        {testData.map(( item, idx ) => (
          <ProgressBar key={ idx } bgcolor={ item.bgcolor } completed={ item.completed } />
        ))}
        <NickName />
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button id='hit' disabled={ lifePower == 0 } className="getHit btn" onClick={ leftLife }>Получить урон</button>

      </div>
      <BasicParameters lifePower={lifePower} setLifePower={setLifePower} />
      
    </div>
  );
}


export default App;
