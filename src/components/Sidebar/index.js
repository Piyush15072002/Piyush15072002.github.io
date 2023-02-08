import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import logoS from '../../assets/images/logo-s.png';
import logoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faHome, faSchool, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className='navbar'>


        <nav>

            <NavLink exact='true' activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname="active" className="about" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
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
                    href="https://github.com/Piyush15072002"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/piyush-pant/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://scholar.google.com/citations?user=I3-AR5MAAAAJ&hl=en"
                >
                    <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://orcid.org/0000-0003-0991-9454"
                >
                    <FontAwesomeIcon icon={faOrcid} color="#4d4d4e" />
                </a>
            </li>

        </ul>

    </div>
)


export default Sidebar;