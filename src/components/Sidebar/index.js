import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import logoS from '../../assets/images/logo-s.png';
import logoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => (
    <div className='navbar'>
        {/* <Link className="logo" to="/">


            <img src={logoS} alt="logo" />
            <img className="sub-logo" src={logoSubtitle} alt="logo Subtitle" />

        </Link> */}

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

    </div>
)


export default Sidebar;