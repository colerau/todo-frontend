import React, {useState, useEffect} from 'react'
import {getTodos} from '../actions/getTodos'

const TodoList = props => {

  const [items, setItems] = useState(["eat food"])

  useEffect(() => {
    let mounted = true
    getTodos()
      // .then(items => {
      //   if (mounted) {
      //     setItems(items)
      //   }
      // })
      .then(json => {
        let descriptionsArray = json.items.map(obj => obj.description)
        // for item in json {

        // }
        // debugger

        if (mounted) {
          setItems(descriptionsArray)
        }
      })
    return () => mounted = false
  }, [])

  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {items && items.map(item => 
          <li>{item}</li>
        )}
      </ul>
    </div>
  )
}

export default TodoList