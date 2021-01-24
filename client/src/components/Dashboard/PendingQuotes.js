import { FaSpinner, FaExpandArrowsAlt, FaSyncAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function PendingQuotes({ quotes }) {
    // console.log("Context Quote...", quotes)
    return (
        < div className="pendingquotescontainer" >
            <header className="pendingquotesheader"><div><FaSpinner className="spinner" /><Link to='/quotesPage' className="pendingquoteslink">Pending Quotes</Link></div><div><FaSyncAlt className="sync" /><FaExpandArrowsAlt className="expandicon" /></div></header>
            <table className="quotestable">
                <thead>
                    <tr>
                        <th>ID #</th>
                        <th>NAME</th>
                        <th>DESTINATION</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((quote) => (
                        <tr key={quote.id}>
                            <td>{quote.id}</td>
                            <td>{quote.full_name}</td>
                            <td>{quote.destination}</td>
                            <td>{quote.price}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default PendingQuotes
