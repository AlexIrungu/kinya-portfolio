import './App.css';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { VideoProduction } from './components/VideoProduction';
import { Editing } from './components/Editing';
import { SocialMediaMarketing } from './components/SocialMediaMarketing';
import { Photography } from './components/Photography';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/video-production" exact component={VideoProduction} />
          <Route path="/social-media" exact component={SocialMediaMarketing} />
          <Route path="/editing" exact component={Editing} />
          <Route path="/photography" exact component={Photography} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
