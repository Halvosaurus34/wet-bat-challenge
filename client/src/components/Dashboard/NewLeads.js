import { FaEnvelope, FaExpandArrowsAlt, FaUser, FaCommentAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NewLeads() {
    return (
        <div className="newleadscontainer">
            <header className="newleadsheader"><div><FaEnvelope className="envelope" />  New Leads </div><FaExpandArrowsAlt className="expandicon" /></header>

            <ul className="newleadslist">
                <li className="listelement">
                    <div>
                        <Link className="newleadsuser" to="/user"><FaUser /></Link>
                        <el>
                            <h4>Levi Halvorson</h4>
                            <p>blah blah blah</p>
                        </el>
                    </div>
                    <FaCommentAlt className="comment" />
                </li>
                <li className="listelement">
                    <div>
                        <Link className="newleadsuser" to="/user"><FaUser /></Link>
                        <el>
                            <h4>Levi Halvorson</h4>
                            <p>blah blah blah</p>
                        </el>
                    </div>
                    <FaCommentAlt className="comment" />
                </li>
                <li className="listelement">
                    <div>
                        <Link className="newleadsuser" to="/user"><FaUser /></Link>
                        <el>
                            <h4>Levi Halvorson</h4>
                            <p>blah blah blah</p>
                        </el>
                    </div>
                    <FaCommentAlt className="comment" />
                </li>
                <li className="listelement">
                    <div>
                        <Link className="newleadsuser" to="/user"><FaUser /></Link>
                        <el>
                            <h4>Levi Halvorson</h4>
                            <p>blah blah blah</p>
                        </el>
                    </div>
                    <FaCommentAlt className="comment" />
                </li>
                <li className="listelement">
                    <div>
                        <Link className="newleadsuser" to="/user"><FaUser /></Link>
                        <el>
                            <h4>Levi Halvorson</h4>
                            <p>blah blah blah</p>
                        </el>
                    </div>
                    <FaCommentAlt className="comment" />
                </li>

            </ul>
        </div>
    )
}

export default NewLeads
