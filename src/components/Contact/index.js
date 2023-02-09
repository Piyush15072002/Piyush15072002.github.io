import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/index.js'
import { useEffect, useState } from 'react'


const Contact = () => {

    const contactArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e', '!']

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
            <div className="container contact-page">

                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={contactArray} index={15} />
                    </h1>

                    <p>
                        Please feel free to reach out to me for any Job/Internship offers, project collaboration, tutoring, or any other help. I would be truly delighted by your effort.

                    </p>
                    <p>
                        I will be replying your query ASAP so don't worry, just drop a message. Arigato!
                    </p>

                    <div className="contact-form">

                        <form action="">
                            <ul>

                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='email@gmail.com' required />
                                </li>

                                <li>
                                    <input placeholder="Subject" type="text" name="subject" />
                                </li>

                                <li>
                                    <textarea name="message" placeholder='Here you go!' required cols="30" rows="10"></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>

                            </ul>
                        </form>

                    </div>

                </div>

            </div>


            <Loader type="pacman" />

        </>

    )

}

export default Contact