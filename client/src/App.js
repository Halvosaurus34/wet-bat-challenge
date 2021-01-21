import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="container">
      <NavBar/>
    </div>
    </Router>
  );
}

export default App;
