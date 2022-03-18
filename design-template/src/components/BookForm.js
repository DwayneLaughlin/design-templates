import React, { useState } from "react";

const BookForm = () => {
const [name, setName] = useState('');
const [check, setCheck] = useState (false)

const handleSubmit = (e) => {
  e.preventDefault()
  alert (name + check)
}
 


return(
  <div>
    <h1>This is a form</h1>
    <form onSubmit={handleSubmit}>
      <input 
      type='text' 
      required
      value = {name}
      // onChange has to be in here to allow for writing in the form field
      onChange={(e) => setName(e.target.value)}>
      </input>


      <select 
      value={check}
      onChange={(e) => setCheck(e.target.value)}>
        <option value ="thing-1">thing 1</option>
        <option value ="thing-2">thing 2</option>
        <option value ="thing-3">thing 3</option>    
      </select>
      <button>submit</button>
    </form>
    <p>this is your input: {name}</p>
    <p>this is your selection: { check }</p>
  </div>
)

}

export default BookForm