import { FaHandshake, FaEllipsisV } from 'react-icons/fa'
import closeRatio from './closeratio.png'
function CloseRatios() {
    return (
        <div className="closeratiocontainer">
            <header className="closeratioheader"><div><FaHandshake className="envelope" />  Close Ratios </div><FaEllipsisV className="ellipsis" /></header>
            <img className="closeratioimg" src={closeRatio}></img>
        </div>)
}

export default CloseRatios
