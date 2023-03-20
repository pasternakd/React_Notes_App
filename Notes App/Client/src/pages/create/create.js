import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './create.css'


export default function Create() {
  const [inputs, setInputs] = useState({})
  const Navigate = useNavigate()


  function handleChange(e) 
  {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  function handleSubmit(e) 
  { 
    e.preventDefault();
    axios.post('http://localhost:3001/create', inputs).then(function() {
      Navigate('/');
     });;
  }

    return (
      <div className="create">
        <form onSubmit={(e) => handleSubmit(e)}>

        <label>
          <span>Title:</span>
          <input 
            type='text'
            onChange={handleChange}    
            name='title'>
          </input>
         </label> 

        <label>
          <span>Description:</span>
          <textarea 
            type='text'
            onChange={handleChange} 
            name='description'>
          </textarea>
        </label> 
        
          <button className="btn">Create</button>
        </form>
      </div>
    )
  }
  