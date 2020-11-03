import React from 'react';

const App = () => {
  const [value, setValue] = React.useState('initial')
  const renderCount = React.useRef(1)
  const inputRef = React.useRef(null)
  const prevState = React.useRef('')

  React.useEffect(() => {
    renderCount.current++
    //inputRef.current - в нем обычный элемент ДОМ, у которого есть свойство value
    console.log(inputRef.current.value)
  })

  React.useEffect(() => {
    prevState.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Предыдущее состояние: {prevState.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button className={'btn btn-success'} onClick={focus}>Focus</button>
    </div>
  );
};

export default App;