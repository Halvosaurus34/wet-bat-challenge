import { FaPaperPlane, FaEllipsisV } from 'react-icons/fa'
import worldMap from './worldmap.png'

function PopularDestinations() {
    return (
        <div className="populardestinationscontainer">
            <header className="newleadsheader"><div><FaPaperPlane className="paperplane" />  Popular Destinations &#38; Packages </div><FaEllipsisV className="ellipsis" /></header>
            <ul className="popularlist">
                <li className="popularlistelement">
                    <div>
                        <span>
                            <p>Lorem ipsum dolor sit </p>
                        </span>
                        <button className="popularbutton1"></button>
                    </div>
                </li>
                <li className="popularlistelement">
                    <div>
                        <span>
                            <p>Lorem ipsum dolor sit </p>
                        </span>
                        <button className="popularbutton2"></button>
                    </div>
                </li>
                <li className="popularlistelement">
                    <div>
                        <span>
                            <p>Lorem ipsum dolor sit </p>
                        </span>
                        <button className="popularbutton3"></button>
                    </div>
                </li>
                <li className="popularlistelement">
                    <div>
                        <span>
                            <p>Lorem ipsum dolor sit </p>
                        </span>
                        <button className="popularbutton4"></button>
                    </div>
                </li>
                <li className="popularlistelement">
                    <div>
                        <span>
                            <p>Lorem ipsum dolor sit </p>
                        </span>
                        <button className="popularbutton5"></button>
                    </div>
                </li>


            </ul>

            <img className="worldmap" src={worldMap} alt="worldmap"></img>
        </div>
    )
}

export default PopularDestinations
