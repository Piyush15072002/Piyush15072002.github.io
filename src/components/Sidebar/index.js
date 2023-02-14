import { NavLink } from 'react-router-dom';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBriefcase, faCode, faEnvelope, faGraduationCap, faHome, faSchool, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faOrcid, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className='navbar'>


        <nav>

            <NavLink exact='true' activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname="active" className="about" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname="active" className="skills" to="/skills" >
                <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="education" to="/education" >
                <FontAwesomeIcon icon={faSchool} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname="active" className="workexp" to="/workexp" >
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname="active" className="research" to="/research" >
                <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname="active" className="contact" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

        </nav>

        <ul>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/PiyushWithPant"
                    title="GitHub | Piyush Pant"
                >
                    <FontAwesomeIcon className="github" icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/919145728659"
                    title="Whatsapp | Piyush Pant"
                >
                    <FontAwesomeIcon className="whatsapp" icon={faWhatsapp} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/piyush-pant/"
                    title="LinkedIn | Piyush Pant"
                >
                    <FontAwesomeIcon className="linkedin" icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://scholar.google.com/citations?user=I3-AR5MAAAAJ&hl=en"
                    title="Google Scholar | Piyush Pant"
                >
                    <FontAwesomeIcon className="scholar" icon={faGraduationCap} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://orcid.org/0000-0003-0991-9454"
                    title="ORCID | Piyush Pant"
                >
                    <FontAwesomeIcon className="orcid" icon={faOrcid} color="#4d4d4e" />
                </a>
            </li>

        </ul>

    </div >
)


export default Sidebar;