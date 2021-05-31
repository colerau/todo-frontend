import React, {useState, useEffect} from 'react' 
import DatePicker from 'react-datepicker'

const TodoForm = props => {

  const [description, setDescription] = useState('')

  const descriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

  }

  return (
    <>
      <h1>New Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Description
          <input type="text" name="description" value={description} onChange={descriptionChange} />
        </label>
        <input type="submit" value="Add Item" />
      </form>
    </>
  )
}

export default TodoForm