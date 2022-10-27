import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './header/Header';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './layout/Navbar';
import PagenotFound from './components/PagenotFound';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state ={apiRsponse:""}; 
    }

    callApi(){
      fetch("http://localhost:3001/testApi")
      .then(res => res.text())
      .then(res => this.setState({apiRsponse: res}));
    }

    componentWillMount(){
      this.callApi();
    }
 
    render() {
      return (
        <Router> 
          <div className="App">
            <Navbar />
            
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route  component={PagenotFound} />
            </Switch>
          </div>
         <h2 className="apicalltext">{this.state.apiRsponse}</h2>
        </Router>
      );
    }
    
}

export default App;
