import { Link } from 'react-router-dom'
import './navbar.css'


export default function Navbar() {

    return (
      <div className="navbar">
        <Link to="/" className='logo'> <h1>Notes</h1> </Link>
        <Link to="/create">Create a note</Link>
      </div>
    )
  }
  