import React, {useState} from 'react';
import '../App.css';

//useState example
function App() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(prevState => prevState + 1)
  }

  function decrement() {
    setCounter(prevState => prevState - 1)
  }

  return (
    <div className="App">
      <h2>Счетчик: {counter}</h2>
      <button onClick={increment} className={'btn btn-success'}>Добавить</button>
      <button onClick={decrement} className={'btn btn-danger'}>Убрать</button>
    </div>
  );
}