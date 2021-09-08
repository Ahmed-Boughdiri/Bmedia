import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  HashRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";
import { 
  Home, 
  News, 
  Support,
  About
} from "screens";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
