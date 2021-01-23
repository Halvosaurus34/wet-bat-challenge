import { FaChartBar, FaEllipsisV } from 'react-icons/fa'
import RevenueChart from './revenuechart.png'
function Revenue() {
    return (
        <div className="revenuecontainer">
            <header className="revenueheader"><div><FaChartBar className="fastforward" />  Revenue </div><FaEllipsisV className="ellipsis" /></header>
            <img className="revenuechart" src={RevenueChart} alt="revenue"></img>
        </div>
    )
}

export default Revenue
