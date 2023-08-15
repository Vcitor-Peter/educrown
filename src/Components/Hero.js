import React from 'react'
import NavBar from "./NavBar";
import glass from '../assets/images/glass.png'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero-content-wrapper'>
                <NavBar />
                <div className='hero-content'>
                    <h1>Develop a passion for <br /> learning new things.</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable.
                    </p>

                    <div className='search-input'>
                        <input
                            placeholder='Search Courses'
                            type='text'
                        />
                        <button>
                            <img
                                src={glass}
                                alt='search'
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
