import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value,
    });
    console.log(event);
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={(event) => this.handleChange(event)}
          name="message"
          id="message"
          value={this.state.tweet}
        />
        <h2>Remaining characters</h2>
        <p>{this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
