
import { CssBaseline } from '@material-ui/core';
import { useEffect } from 'react';
import Home from './components/Home';
import Resume from './components/Resume';
import { Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import BottomNav from './components/BottomNav';
function App() {
  useEffect(() => {
    document.body.style.backgroundColor="#233"
  }, [])
  return (
    <>
    <CssBaseline/>
    <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/resume" component={Resume}/>
     <Route exact path="/projects" component={Portfolio}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/technologies" component={Technologies}/>
    <BottomNav/>
    </>
  );
}

export default App;
