import { useState } from 'react'
import './index.scss'
import AnimatedLetter from '../AnimatedLetters/index.js'



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['P', 'i', 'y', 'u', 's', 'h', ' ', 'P', 'a', 'n', 't']

    const jobArray = ['M', 'a', 'c', 'h', 'i', 'n', 'e', ' ', 'L', 'e', 'a', 'r', 'n', 'i', 'n', 'g', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', ',', ' ', 'A', 'K', 'A', ' ', 'D', 'a', 't', 'a', ' ', 'S', 'c', 'i', 'e', 'n', 't', 'i', 's', 't', ' ', 'b', 'u', 't', ' ', 'T', 'e', 'c', 'h', 'n', 'i', 'c', 'a', 'l']





    return (
        <div className="container home-page">

            <div className="text-zone">
                <h1>
                    <span className={letterClass}>N</span>
                    <span className={`${letterClass} _12`}>a</span>
                    <span className={`${letterClass} _13`}>m</span>
                    <span className={`${letterClass} _14`}>a</span>
                    <span className={`${letterClass} _15`}>s</span>
                    <span className={`${letterClass} _16`}>t</span>
                    <span className={`${letterClass} _17`}>e,</span>

                    <br />

                    <span className={`${letterClass} _18`}>I</span>
                    <span className={`${letterClass} _19`}>'m </span> <AnimatedLetter letterClass={letterClass} strArray={nameArray} index={20} />
                </h1>

                <br />

                <h2>
                    <AnimatedLetter letterClass={letterClass} strArray={jobArray} index={31} />
                </h2>
            </div>

        </div>
    )
}

export default Home