
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
   
      </Switch >
    
    </div>
  );
}
     


export default App;
