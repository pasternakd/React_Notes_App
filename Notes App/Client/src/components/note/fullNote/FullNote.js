import './fullNote.css';

export default function FullNote({ note, handleClose }) {
    return (
        <>
            <div className='full-note-container'>
                <div className='full-note-container-title'>
                    <h1>{note.title}</h1>
                </div>
                <div className='full-note-container-body'>
                    <div className='description'>
                      <p>{note.description}</p>
                    </div>
                </div>
                <button onClick={handleClose} className='btn'>Close</button>
            </div>
         </>
         )
        }