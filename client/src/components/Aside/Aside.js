import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome, FaDollarSign, FaListAlt, FaPaperPlane, FaStickyNote, FaChartLine,FaUserFriends, FaCog, FaLifeRing} from 'react-icons/fa'

const Aside = () => {
    return (
        <aside className="aside">
            <Link className="asidebutton" to="/"><FaHome className="asideicon"/>  Home</Link>
            <Link className="asidebutton" to='/quotesPage'><FaDollarSign className="asideicon"/> Quotes</Link>
            <Link className="asidebutton" to="/"><FaListAlt className="asideicon"/> Leads</Link>
            <Link className="asidebutton tours" to="/"><FaPaperPlane className="asideicon"/> Tours</Link>
            <Link className="asidebutton" to="/"><FaStickyNote className="asideicon"/> Invoices</Link>
            <Link className="asidebutton" to="/"><FaChartLine className="asideicon"/> Analytics</Link>
            <Link className="asidebutton" to="/"><FaUserFriends className="asideicon"/> HomeTeam</Link>
            <Link className="asidebutton" to="/"><FaCog className="asideicon"/> Admin</Link>
            <Link className="asidebutton support" to="/"><FaLifeRing className="asideicon"/> Support</Link>
            <p className="copyright">All rights reserved by WetBat &copy; </p>
        </aside>
    )
}

export default Aside
