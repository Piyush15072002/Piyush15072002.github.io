import { Link } from 'react-router-dom';
import './index.scss'
import logoS from '../../assets/images/logo-s.png';
import logoSubtitle from '../../assets/images/logo_sub.png';


const Sidebar = () => {
    <div clasName='nav-bar'>
        <Link className="logo" to="/">
            <img src={logoS} alt="logo" />
            <img className="sub-logo" src={logoSubtitle} alt="logo Subtitle" />

        </Link>


    </div>
}

export default Sidebar;