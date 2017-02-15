import React, { Component, PropTypes } from 'react';
import Tweet from './Tweet';

@lore.connect(function(getState, props){
  return {
    tweets: getState('tweet.find')
  }
})
class Feed extends Component {

  static propTypes = {
    tweets: PropTypes.object.isRequired
  };

  renderTweet(tweet) {
    return (
      <Tweet key={tweet.id} tweet={tweet} />
    );
  }

  render() {
    const tweets = this.props.tweets;

    return (
      <div className="feed">
        <h2 className="title">
          Feed
        </h2>
        <ul className="media-list tweets">
          {tweets.data.map(this.renderTweet)}
        </ul>
      </div>
    );
  }

}

export default Feed;
