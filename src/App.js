
import { CssBaseline } from '@material-ui/core';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import {Redirect, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <CssBaseline/>
    <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/resume" component={Resume}/>
     <Redirect to="/"/>
    </>
  );
}

export default App;
