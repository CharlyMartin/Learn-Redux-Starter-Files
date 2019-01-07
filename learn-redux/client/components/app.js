import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to="/">
        <div>
          <h1>Reduxstagram</h1>
        </div>
      </Link>
    )
  }
};

export default App;