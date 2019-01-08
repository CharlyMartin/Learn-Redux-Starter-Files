import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PhotoGrid from './photo-grid';
import Single from './single';


class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/photo/:id" component={Single} />
      </Switch>
      // {React.cloneElement(this.props.children, this.props)}
      // 1st arg = the component being cloned. 2nd arg = the props passed*
    )
  }
};

export default Main;