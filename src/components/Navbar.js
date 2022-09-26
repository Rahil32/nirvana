import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <section className="bg-white dark:bg-gray-900">
      <header className="text-gray-200 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span className="ml-3 text-3xl font-style font-bold cursor-pointer">Nirvana</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-white cursor-pointer">Home</Link>
      <Link to="/shop"className="mr-5 hover:text-white cursor-pointer">Shop</Link>
      <Link to="/about" className="mr-5 hover:text-white cursor-pointer">About</Link>
      <Link to="/contact" className="mr-5 hover:text-white cursor-pointer">Contact</Link>
    </nav>
    <button>Whislist
    </button>
  </div>
</header>
</section> 
    </div>
  )
}

export default Navbar
