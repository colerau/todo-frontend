import React, {useState, useEffect} from 'react' 
import DatePicker from 'react-datepicker'

const TodoForm = props => {

  const [description, setDescription] = useState('')
  const [alert, setAlert] = useState(false)

  const descriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = { description: description };

    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setDescription('')
      setAlert(true)
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  return (
    <>
      <h1>New Item</h1>
      <form onSubmit={handleSubmit}>
        {alert && <h2 className="success">Submit Successful</h2>}
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