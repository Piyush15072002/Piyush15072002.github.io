import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJava, faJs, faNode, faPython, faReact, faRProject } from '@fortawesome/free-brands-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

const textArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={textArray} index={15} />
                </h1>

                <p>Hey!, I am an aspiring Machine Learning Engineer (Data Scientist), currently learning advanced ML/DL algorithms for Natural Language Processing, Image Processing, etc. </p>

                <p>To improve my programming skills, I started Development and later became a Full Stack Web Developer proficient in MERN stack. I have made various industrial projects (which you can find on my GitHub) during my Internship and courses. I have worked in over 7+ programming languages and frameworks. </p>

                <p>Along with programming skills, I am also an AI Researcher. I have research publications in International Conferences and Journals sponsored by reputed research organizations like IEEE, Springer, etc.</p>
                <p>Who doesn't love Sports? Well i was a boxer and later transitioned to Mix Martial Arts to improve my combat skills. I don't play officially now but often spar with my friends and practice everyday.</p>
            </div>

            <div className="stage-cube-cont">

                <div className="cubespinner">

                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faReact} color="#61dbfb" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faNode} color="#3C873A" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faRProject} color="#165CAA" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} color="#f34f29" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faJs} color="#f0db4f" />
                    </div>
                </div>


            </div>
        </div>
    )

}


export default About