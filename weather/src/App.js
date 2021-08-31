
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/site/Header';
import Sidebar  from './components/site/Sidebar';
//import 'bootstrap/dist/css/bootstrap.css';
import MainFunc from './components/Home';

import './App.css';




function App() {
  return (
    <div className="App">

      <MainFunc />
      
    
      <Header />
      <Router>
        <Sidebar />
      </Router>
      
    </div>
  );
}

export default App;
