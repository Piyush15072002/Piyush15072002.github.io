import Loader from 'react-loaders';
import './index.scss';
import kv1 from '../../assets/images/kv1.jpg'
import su2 from '../../assets/images/su2.jpg'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Education = () => {
    return (
        <>
            <div className="container education-page">


                <div className="text-zone">
                    <h1>
                        My Education
                        <NavLink exact="true" to="/about" className="aboutButton" >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </NavLink>
                    </h1>



                    <div className="su">
                        <h3>
                            Sandip University

                        </h3>
                        <p>B.Sc. C.S Artificial Intelligence, Machine Learning & Virtual Reality (2020-2023)</p>

                        <div>
                            <li>
                                Top student in the batch
                            </li>
                            <li>
                                Head Volunteer for National conference and Internal Hackathon
                            </li>
                            <li>
                                Various research work with international professors from USA, France, Malaysia, Hungary, Romania, Australia etc.
                            </li>
                        </div>
                    </div>

                    <div className="kvs">
                        <h3>
                            Kendriya Vidyalaya
                        </h3>
                        <p>Science student with Physics, Chemistry, Maths and Computer Science (2008-2020)</p>
                        <div>
                            <li>
                                One of the Top students in the batch
                            </li>
                            <li>
                                School Caption (2018-2020)
                            </li>
                            <li>
                                National award holder Scout (2013-2020)
                            </li>
                            <li>
                                Regional-level Debater
                            </li>
                            <li>
                                First position in Story-telling, Drawing, Essay-writing, Commentary, etc.
                            </li>
                            <li>
                                School Caption (2013)
                            </li>
                            <li>
                                Studied in over 5+ KV schools all over India
                            </li>

                            <li>
                                Regional-level Boxer
                            </li>
                        </div>
                    </div>


                </div>


                {/* <img src={su1} alt="Sandip University" className="su1" /> */}
                <img src={su2} alt="Sandip University" className="su1" />
                <img src={kv1} alt="Kendriya Vidyalaya" className="kv1" />
                {/* <img src={kv2} alt="Kendriya Vidyalaya" className="kv2" /> */}


            </div>

            <Loader type="pacman" />

        </>
    )
}

export default Education