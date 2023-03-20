import './delete.css'
import axios from 'axios'


export default function Delete({ id, popHandler, getUsers }) {

        
    function deleteUser(e, id) {
        e.stopPropagation();
        axios.delete(`http://localhost:3001/delete/${id}/`).then(function(){
        popHandler()
        getUsers()
    })
    }

    return (
        <>
            <div className='delete-pop-container'>
                <div className='delete-pop-container-message'>
                   <h1>Do you want to delete this note? </h1>
                </div>
                <div className='delete-pop-buttons'>
                     <div className='confirm'>
                        <button 
                        onClick={(e) => deleteUser(e, id)}>Yes</button>
                     </div>
                    <div className='decline'>
                        <button onClick={() => popHandler('delete')}>No</button>
                    </div>
                </div>
            </div>
        </>
  )
  }
  