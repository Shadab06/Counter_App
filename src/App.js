import React, { useState } from 'react';
import './App.css';

function App() {

  const [num, setNum] = useState(0);

  const increaseNum = () => {

    setNum(num + 1);
  }

  const decreaseNum = () => {

    setNum(num - 1);

    if (num <= 0) {

      window.alert('Number below the limit...');
    }
  }

  const colourChange = () => {

    if (num <= 5 && num > 0) {
      document.getElementById('number').style.color = 'red';
    }
    else if (num >= 10) {
      document.getElementById('number').style.color = 'green';
    }
    else {
      document.getElementById("number").style.color = 'white';
    }
  }


  return (
    <div className="App">
      <span id="plus-sign" onClick={() => {
        increaseNum();
        colourChange();
      }}>
        &#x2b;</span>

      <p id="number">{num}</p>

      <span id="minus-sign" onClick={() => {
        decreaseNum();
        colourChange();
      }}>&#x2212;</span>
    </div>
  );
}

export default App;
