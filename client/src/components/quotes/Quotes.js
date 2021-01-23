import './Quotes.css';
import { FaPaperPlane, FaEllipsisV } from 'react-icons/fa'

function Quotes({ quotes }) {
    return (
        <div className="quotelistcontainer">
            <header className="quotelistheader"><div><FaPaperPlane className="paperplane" />  Quotes </div><FaEllipsisV className="ellipsis" /></header>
            <table className="quotelist">
                <thead>
                    <tr>
                        <th>ID #</th>
                        <th>NAME</th>
                        <th>PHONE NUMBER</th>
                        <th>USER ADDRESS</th>
                        <th>DEPARTURE AIRPORT</th>
                        <th>DESTINATION</th>
                        <th>DEPARTURE DATE</th>
                        <th>RETURN DATE</th>
                        <th>TRANPORT</th>
                        <th># OF PEOPLE</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((quote) => (
                        <tr key={quote.id}>
                            <td>{quote.id}</td>
                            <td>{quote.full_name}</td>
                            <td>{quote.phone_number}</td>
                            <td>{quote.user_address}</td>
                            <td>{quote.departure_airport}</td>
                            <td>{quote.destination}</td>
                            <td>{quote.departure_date}</td>
                            <td>{quote.return_date}</td>
                            <td>{quote.optional_transport ? quote.optional_transport : "None selected"}</td>
                            <td>{quote.people}</td>
                            <td>{quote.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Quotes;
