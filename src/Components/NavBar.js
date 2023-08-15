import React from 'react'
import logo from '../assets/images/logo.png'

export default function NavBar() {
    return (
        <div className='nav-bar'>
            <div className='logo'>
                <img
                    alt='logo'
                    src={logo}
                />
                <h4>Educrown</h4>
            </div>
            <ul className='nav-list'>
                <li>Home</li>
                <li>Features</li>
                <li>Courses</li>
                <li>Testimonia</li>
                <li>Blog</li>
                <li>Faqs</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
