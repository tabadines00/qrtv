import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="h-auto w-screen p-6">
      <ul className='justify-center m-0 flex space-x-6 flex-row'>
        <li className="navbar-item">
          <Link href="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link href="/services">Services</Link>
        </li>
        <li className="navbar-item">
          <Link href="/articles">Articles</Link>
        </li>
        <li className="navbar-item">
            <Link href="/contact">Contact</Link>
          </li>
      </ul>
    </div>
  )
}
