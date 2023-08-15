import React from 'react'
import Card from './Card'
import avatar from '../assets/images/avatar.png'
import medal from '../assets/images/medal.png'
import plane from '../assets/images/plane.png'

export default function CardList() {
    return (
        <div className='card-list'>
            <Card
                img={medal}
                title='Certificate'
                desc='A Google Docs scam that appears to be widespread began landing on wednesday in what seemed to be a phishing attack.'
            />
            <Card
                img={avatar}
                title='Expert Instructors'
                desc='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
            />
            <Card
                img={plane}
                title='Learn from anywhere'
                desc=' All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
            />
        </div>
    )
}
