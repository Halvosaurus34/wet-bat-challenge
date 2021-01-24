import { Link } from 'react-router-dom'
import '../../index.css'
import { FaBell, FaCommentAlt, FaCog, FaUser, FaSearch } from 'react-icons/fa';
import logo from './wetBatTransp.PNG'
import logo2 from './wetBatIcon2.PNG'
function NavBar() {
    return (
        <nav className="topnav">
            <div className="logocontainer">
                <img className="logo2" alt="logo2" src={logo2} />
                <img className="logo" alt="logo" src={logo} />
                <div>
                    <p className="wetbat">Wet Bat</p>
                    <p className="travel">TRAVEL</p>
                </div>
            </div>
            <div className="searchandlinks">
                <FaSearch className="searchicon" />

                <form className=" toplink">
                    <input type="search" className="search" placeholder="Search.."></input>
                </form>
                <Link className="bell toplink" to="/"><FaBell /></Link>
                <Link className="chat toplink" to="/chat"><FaCommentAlt /></Link>
                <Link className="settings toplink" to="/settings"><FaCog /></Link>
                <Link className="user toplink" to="/user"><FaUser /></Link>

            </div>
        </nav >
    )
}

export default NavBar
