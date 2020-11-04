import React, {useState} from 'react';
import '../App.css';

function complexCompute(num) {
  console.log('Computed')
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [color, setColor] = useState(false)

  const style = React.useMemo(() => ({
    color: color ? 'blue' : 'black'
  }), [color])

  const computed = React.useMemo(() => {
    return complexCompute(number)
  }, [number])

  React.useEffect(() => {
    console.log('Styles changed')
  }, [style])

  return (
    <>
      <h2 style={style}>Вычисляемое свойство: {computed}</h2>
      <button onClick={() => setNumber(prevValue => prevValue + 1)} className={'btn btn-success'}>Добавить</button>
      <button onClick={() => setNumber(prevValue => prevValue + 1)} className={'btn btn-danger'}>Убрать</button>
      <button onClick={() => setColor(prevValue => !prevValue)} className={'btn btn-warning'}>Изменить</button>
    </>
  );
}

export default App;