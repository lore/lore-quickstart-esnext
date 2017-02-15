import React, { Component, PropTypes } from 'react';
import UserCanDeleteTweet from '../decorators/UserCanDeleteTweet';

@UserCanDeleteTweet
class DeleteLink extends Component {

  constructor(props) {
    super(props);
    this.onDestroy = this.onDestroy.bind(this);
  }

  static propTypes = {
    tweet: PropTypes.object.isRequired
  };

  onDestroy() {
    var tweet = this.props.tweet;

    function destroyTweet() {
      lore.actions.tweet.destroy(tweet);
    }

    lore.dialog.show(function() {
      return lore.dialogs.tweet.destroy({
        model: tweet,
        onSubmit: destroyTweet
      });
    });
  }

  render() {
    return (
      <a className="link" onClick={this.onDestroy}>
        delete
      </a>
    );
  }

}

export default DeleteLink;
