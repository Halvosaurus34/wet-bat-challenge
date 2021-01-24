import { FaChartPie, FaEllipsisV } from 'react-icons/fa'
import PieChart from './piechart.png'
function PotentialRevenue() {
    return (
        <div className="potentialrevenuecontainer">
            <header className="potentialrevenueheader"><div><FaChartPie className="fastforward" /> Potential Revenue </div><FaEllipsisV className="ellipsis" /></header>
            <div className="piechartcontainer">
                <img className="piechart" src={PieChart} alt="piechart1"></img>
                <img className="piechart1" src={PieChart} alt="piechart2"></img>
                <img className="piechart2" src={PieChart} alt="piechart3"></img>
            </div>
        </div>
    )
}

export default PotentialRevenue
