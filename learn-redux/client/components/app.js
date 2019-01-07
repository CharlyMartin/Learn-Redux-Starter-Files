import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>        
        <div>
          <Link to="/">
            <h1>Reduxstagram</h1>
          </Link>
        </div>
          
        {/* {React.cloneElement(this.props.children, this.props)} */}
        {/* 1st arg = the component being cloned. 2nd arg = the props passed*/}
        
      </Router>
    )
  }
};

export default App;