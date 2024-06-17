import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import MenuButton from '../MenuButton/MenuButton';
import "./Navbar.css"

const Navbar = () => {

    return (
        <nav id="navbar">

            <div>
                <h1>
                    <Link to="/" className="btnDark">StudyBook.mn</Link>
                </h1>
            </div>

            <div id="nav-buttons">
                <MenuButton buttonValue="Миний номнууд" direction={"/mybooks"} />
                <MenuButton buttonValue="Шалгалт өгөх" />
                <FontAwesomeIcon icon={faUser} size="xl" />
            </div>
        </nav>
    );
}

export default Navbar;