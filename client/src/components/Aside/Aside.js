import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome, FaDollarSign, FaListAlt, FaPaperPlane, FaStickyNote, FaChartLine,FaUserFriends, FaCog, FaLifeRing} from 'react-icons/fa'

const Aside = () => {
    return (
        <aside className="aside">
            <Link className="asidebutton"><FaHome className="asideicon"/>  Home</Link>
            <Link className="asidebutton"><FaDollarSign className="asideicon"/> Quotes</Link>
            <Link className="asidebutton"><FaListAlt className="asideicon"/> Leads</Link>
            <Link className="asidebutton tours"><FaPaperPlane className="asideicon"/> Tours</Link>
            <Link className="asidebutton"><FaStickyNote className="asideicon"/> Invoices</Link>
            <Link className="asidebutton"><FaChartLine className="asideicon"/> Analytics</Link>
            <Link className="asidebutton"><FaUserFriends className="asideicon"/> HomeTeam</Link>
            <Link className="asidebutton"><FaCog className="asideicon"/> Admin</Link>
            <Link className="asidebutton support"><FaLifeRing className="asideicon"/> Support</Link>
            <p className="copyright">All rights reserved by WetBat &copy; </p>
        </aside>
    )
}

export default Aside
