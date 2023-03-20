import { useState, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import './edit.css'


export default function Edit() {
  const [inputs, setInputs] = useState({});
  const Navigate = useNavigate()

  const {id} = useParams();

    useEffect(() => {
      getUser();
    },[]);

  function getUser() {
      axios.get(`http://localhost:3001/note/${id}/`).then(function(response) {  
        const data = response.data.pop()
        setInputs(data);
    })
  }

  function handlechange(e) 
  {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  function handleSubmit(e) 
  { 
    e.preventDefault()
    axios.put(`http://localhost:3001/update/`, inputs).then(function() {
      Navigate('/');
    });
  }

    return (
      <div className="edit">
        <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Title:</span>
          <input 
            type='text'
            onChange={handlechange} 
            value={inputs.title || ''}
            name='title'>
          </input>
        </label> 
        <label>
          <span>Description:</span>
          <textarea
            type='text'
            onChange={handlechange} 
            value={inputs.description || ''}
            name='description'>
          </textarea>
        </label> 
        <button className="btn">Edit</button>
        </form>
      </div>
    )
  }
  