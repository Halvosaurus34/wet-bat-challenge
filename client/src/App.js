import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Aside from './components/Aside/Aside'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <Router>
    <div className="container">
      <NavBar/>
      <div className="container2"> 
      <Aside/>
      <Dashboard/>
      </div>
    </div>
    </Router>
  );
}

export default App;
