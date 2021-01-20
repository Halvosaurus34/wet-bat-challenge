import './Quotes.css';
import { useState, useEffect } from 'react'

function Quotes() {
    const [quotes, setQuotes] = useState([])

    useEffect(()=> {
        console.log('Fetching...')
        fetch('/quotes')
            .then(res => res.json())
            .then(quotes => setQuotes(quotes))
        console.log('Fetched quotes...', quotes)
    },[])


    return (
        <div className="quotes">
        <h2>Quotes</h2>
        <ul>
            {quotes.map(quote => 
                <li key={quote.id}>{quote.full_name}</li>    
            )}
        </ul>
        </div>
    );
}

export default Quotes;
