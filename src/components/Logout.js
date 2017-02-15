import React, { Component, PropTypes } from 'react';
import auth from '../utils/auth';

class Logout extends Component {

  static propTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount(){
    auth.deleteToken();
    this.props.router.push('/');
  }

  render() {
    return (
      <h1 className="loading-text">
        Logging out...
      </h1>
    );
  }
}

export default Logout;
