import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useReducer, useEffect } from 'react'
import Quotes from './components/quotes/Quotes'
import Aside from './components/Aside/Aside'
import Dashboard from './components/Dashboard/Dashboard'


export const ACTIONS = {
  ADD_QUOTE: "addQuote",
  FETCH_QUOTES: "getQuotes"
}

function reducer(quotes, action) {
  switch (action.type) {
    case ACTIONS.FETCH_QUOTES:
      // console.log("ACTION PAYLOAD: ", action.payload)
      return action.payload
    case ACTIONS.ADD_QUOTE:
      // console.log("ADD PAYLOAD: ", action.payload)
      return action.payload
    default:
      return
  }
}


function App() {
  const [quotes, dispatch] = useReducer(reducer, [])
  //load the quote list on reload
  useEffect(() => {
    const getQuotes = async () => {
      const quotesFromServer = await fetchQuotes()
      console.log(quotesFromServer)
      dispatch({ type: ACTIONS.FETCH_QUOTES, payload: quotesFromServer })
    }

    getQuotes()
  }, [])

  //fetch quotes from db
  const fetchQuotes = async () => {
    const res = await fetch('/quotesTable')
    const data = await res.json()
    return data
  }

  //add quote to db 
  const addQuote = async (quote) => {
    console.log('Adding quote...', JSON.stringify(quote))
    const res = await fetch('/quotesTable/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(quote)
    })

    const data = res.json()
    console.log('added quote...', res)
    const newQuotes = [...quotes, data]
    dispatch({ type: ACTIONS.ADD_QUOTE, payload: newQuotes })
  }

  return (
    <Router>

      <div className="container">
        <NavBar />
        <div className="container2">
          <Aside />

          <Route path="/" exact render={(props) => (
            <Dashboard quotes={quotes} onAdd={addQuote} />
          )} />
          <Route path="/quotesPage" exact render={(props) => (
            <Quotes quotes={quotes} />
          )} />

        </div>
      </div>

    </Router>
  );
}

export default App;
