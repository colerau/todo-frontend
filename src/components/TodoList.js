import React, {useState, useEffect} from 'react'
import {getTodos} from '../actions/getTodos'

const TodoList = props => {

  const [items, setItems] = useState([])

  useEffect(() => {
    let mounted = true
    fetch('http://localhost:3000/items')
      .then(data => data.json())
      .then(json => {

        if (mounted) {
          setItems(json)
        }
      })

    return () => mounted = false
    
  }, [])

  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {items && items.map(item => 
          <li key={item.id}>{item.description}</li>
        )}
      </ul>
    </div>
  )
}

export default TodoList