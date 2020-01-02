import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeComponent from './homeComponent';
import LcaComponent from './lcaComponent';
import learnersComponent from './learnersComponent';


class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomeComponent}/>
        <Route path="/lcas" component={LcaComponent}/>
        <Route path="/scholars" component={learnersComponent}/>
      </BrowserRouter>
    );
  }
}

export default App;
