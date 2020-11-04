import React, {useState} from 'react';
import ItemsList from "./ItemsList";

function App() {
  const [number, setNumber] = useState(1)
  const [color, setColor] = useState(false)

  const style = {
    color: color ? 'blue' : 'black'
  }

  const getGenerateItemsFromAPI = React.useCallback(() => {
    return new Array(number).fill('').map((_, i) => `Элемент ${i + 1}`)
  }, [number])

  return (
    <>
      <h2 style={style}>Количество элементов: {number}</h2>
      <button onClick={() => setNumber(prevValue => prevValue + 1)} className={'btn btn-success'}>Добавить</button>
      <button onClick={() => setColor(prevValue => !prevValue)} className={'btn btn-warning'}>Изменить</button>

      <ItemsList getItems={getGenerateItemsFromAPI}/>
    </>
  );
}

export default App;