import React from 'react'

export default function ItemsList({getItems}) {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    const newItems = getItems()
    setItems(newItems)
  }, [getItems])

  return (
    <ul>
      {items.map(i => <li key={i}>{i}</li>)}
    </ul>
  )
}