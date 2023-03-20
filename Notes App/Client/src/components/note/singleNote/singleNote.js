import React from 'react'
import axios from 'axios'
import './singleNote.css'
import { Link } from 'react-router-dom'
import { checkLength } from './helper'
import { useState, useEffect } from 'react'
import FullNote from '../fullNote/FullNote'
import Delete from '../deleteNotePop/delete'
import useWindowSize from '../../../hooks/useWindowSize'



export default function SingleNote() {
  const [noteInfo, setNoteInfo] = useState({ title: '' , description: '' , id: ''})
  const [data, setData] = useState([]);
  const [extendedNote, setExtendedNote] = useState(false)
  const [deletePop, setDeletePop] = useState(false);
  const [overflowVisable, setOverflowVisable] = useState(false)
  const [grayOverlay, setGrayOverlay] = useState(false)
  const [size] = useWindowSize()
  const {checkTitleLength, checkDescriptionLength} = checkLength()

  const getUsers = () => 
  {
      axios.get('http://localhost:3001/').then(function(response) {
      setData(response.data)
    })

  }

  useEffect(() => {
    document.body.style.overflow = "";
    getUsers();
   },[]);

  const getDeleteIcon = () => {
    if (size<1000)
    {
      return "gg-trash"
    } else {
      return "gg-close-o"
    }
  }

  
  const handleClick = (title, description) => 
  {
    popHandler()
    setNoteInfo({title: title, description: description})
    setExtendedNote(!extendedNote)
  }

  const handleClose = (e) => {
    e.stopPropagation();
    setExtendedNote(false) 
    popHandler()
    }

  const handleDeletePop = (e, id) =>
  {
    e.stopPropagation();
    popHandler('delete')
    setNoteInfo({...noteInfo, id: id});
  }  

  const popHandler = (callstack) => {
    if (overflowVisable)
    {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = "hidden";
    }

    if (callstack === 'delete' || deletePop) {
      setDeletePop(!deletePop)
    }

    setOverflowVisable(!overflowVisable)
    setGrayOverlay(!grayOverlay)
  }

 
    return (
        <div className="notes-container" >
          {data && data.map((note) => (
            <div key={note.id} className="notes" 
              onClick={() => handleClick(note.title, note.description)}>
              <div className="notes-description ">
                <h2>{checkTitleLength(note.title)}  </h2>
                <p>{checkDescriptionLength(note.description)}</p>
              </div>
              <div className="notes-buttons">
                <Link to={`/edit/${note.id}`} className="gg-edit-markup"></Link>
                <i className={getDeleteIcon()}
                onClick={(e) => handleDeletePop(e, note.id)}>
                </i>
              </div>
            </div>
          ))}
          {grayOverlay && <div className='gray-overlay' onClick={(e) => handleClose(e)}></div>} 
          {extendedNote && <FullNote note={noteInfo} handleClose={handleClose}/> } 
          {deletePop && <Delete id={noteInfo.id} popHandler={popHandler} getUsers={getUsers}/>}
        </div>
    )

}