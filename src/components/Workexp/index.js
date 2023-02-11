import { faArrowLeft, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import { NavLink } from 'react-router-dom';
import './index.scss';


const Workexp = () => {

    return (

        <>

            <div className="container workexp-page">


                <div className="text-zone">

                    <h1>
                        Work Experience / Internships
                        <NavLink exact="true" to="/about" className="aboutButton" >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </NavLink>
                    </h1>



                    <h4>
                        Machine Learning Internship
                    </h4>
                    <p>Suvidha Foundation (Oct 2022 - Nov 2022)</p>
                    <div>
                        <li>
                            Implemented Classification and Regression algorithms using Kaggle
                        </li>
                        <li>
                            Learnt basic concepts of NLP and wrote thesis on NLP using NLTK
                        </li>
                    </div>


                    <h4>
                        Data Science & Web Dev internship
                    </h4>
                    <p>V.I. Technology (April 2022 - Oct 2022 )</p>
                    <div>
                        <li>
                            Data analysis, visualization, ML, MySQL, Thesis writing (3 months)
                        </li>
                        <li>
                            Developed 3 Industrial projects based on MERN (3 months)
                        </li>
                    </div>


                    <h4>
                        Full Stack Web Dev Internship
                    </h4>
                    <p>Nav Tarang (Oct 2021 - April 2022)</p>
                    <div>
                        <li>
                            Developed the website of the organisation from scratch
                        </li>
                        <li>
                            Performed management work & contacted other organisations for
                            collaboration
                        </li>
                    </div>

                    <h4>
                        Backend Engineering Internship
                    </h4>
                    <p>Youth & Sports Development Federation (Feb
                        2022 - March 2022)</p>
                    <div>
                        <li>
                            Developed backend using NodeJS of an Industrial project
                        </li>
                        <li>
                            Team Leader of 6 member team
                        </li>
                        <li>
                            Testing & Presentation of the Final model
                        </li>
                    </div>


                </div>
                <div className="hackathon">
                    <FontAwesomeIcon icon={faSun} className="sun"></FontAwesomeIcon>
                    <p>
                        6th rank in International Hackathon out of 250+ teams
                        <br />
                        +
                        <br />
                        Job offer from WinJit
                    </p>
                </div>

            </div>

            <Loader type="pacman" />

        </>
    )

}


export default Workexp