import {  FaEllipsisV, FaUser, FaCommentAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function TeamChat() {
    return (
        <div className="teamchatcontainer">
            <header className="newleadsheader"><div><FaCommentAlt className="envelope" />  Team Chat </div><FaEllipsisV className="ellipsis" /></header>

            <ul className="newleadslist">
                <li className="listelement">
                    <div>
                        <Link className="teamchatsuser" to="/user"><FaUser /></Link>
                        <el>
                            <h4>Levi Halvorson</h4>
                            <p>blah blah blah</p>
                        </el>
                    </div>
                    <FaCommentAlt className="comment" />
                </li>
                <li className="listelement">
                    <div>
                        <Link className="teamchatsuser" to="/user"><FaUser /></Link>
                        <el>
                            <h4>Levi Halvorson</h4>
                            <p>blah blah blah</p>
                        </el>
                    </div>
                    <FaCommentAlt className="comment" />
                </li>
                <li className="listelement">
                    <div>
                        <Link className="teamchatsuser" to="/user"><FaUser /></Link>
                        <el>
                            <h4>Levi Halvorson</h4>
                            <p>blah blah blah</p>
                        </el>
                    </div>
                    <FaCommentAlt className="comment" />
                </li>
                <li className="listelement">
                    <div>
                        <Link className="teamchatsuser" to="/user"><FaUser /></Link>
                        <el>
                            <h4>Levi Halvorson</h4>
                            <p>blah blah blah</p>
                        </el>
                    </div>
                    <FaCommentAlt className="comment" />
                </li>
                <li className="listelement">
                    <div>
                        <Link className="teamchatsuser" to="/user"><FaUser /></Link>
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

export default TeamChat
