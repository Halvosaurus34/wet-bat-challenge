import { FaChartPie, FaEllipsisV } from 'react-icons/fa'
import PieChart from './piechart.png'
function PotentialRevenue() {
    return (
        <div className="potentialrevenuecontainer">
            <header className="potentialrevenueheader"><div><FaChartPie className="fastforward" /> Potential Revenue </div><FaEllipsisV className="ellipsis" /></header>
            <div className="piechartcontainer">
                <img className="piechart" src={PieChart}></img>
                <img className="piechart1" src={PieChart}></img>
                <img className="piechart2" src={PieChart}></img>
            </div>
        </div>
    )
}

export default PotentialRevenue
