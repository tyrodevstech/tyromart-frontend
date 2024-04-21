import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container py-4 my-2'>
        <Link to={'/topico/'}  className='border border-gray-800 px-2 py-2 rounded-md'>Go to Topico Home</Link>
    </div>
  )
}

export default Header;