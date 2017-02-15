import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class Filter extends Component {

  static contextTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const user = this.context.user;

    return (
      <div className="filter">
        <ul className="list-group">
          <IndexLink className="list-group-item" activeClassName="active" to="/">
            Feed
          </IndexLink>
          <Link className="list-group-item" activeClassName="active" to={"/users/" + user.id}>
            My Tweets
          </Link>
        </ul>
      </div>
    );
  }
}

export default Filter;
