import React, {useState, useEffect} from 'react';

const AppUseEffect = () => {
  const [type, setType] = useState('users')
  // eslint-disable-next-line
  const [data, setData] = useState([])
  const [position, setPosition] = useState({})

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(data => setData(data))
  },[type])

  const mouseMoveHandler = (event) =>{
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(()=>{
    console.log('ComponentDidMount')

    window.addEventListener('mousemove', mouseMoveHandler)
  }, [])

  return (
    <div>
      <h1>Source: {type}</h1>

      <button onClick={()=> setType('users')}>Users</button>
      <button onClick={()=> setType('todos')}>Todos</button>
      <button onClick={()=> setType('posts')}>Posts</button>

      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
};

export default AppUseEffect;