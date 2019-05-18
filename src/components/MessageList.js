import React, { Component } from 'react';
import Message from './Messages'

class MessageList extends Component {

  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    return (
      <div className="sc-message-list" ref={el => this.scrollList = el} onScroll={this.props.onScroll}>
        {this.props.messages.map((message, i) => {
          return <Message
            message={message}
            key={i}
            imageUrl={this.props.agentProfile.imageUrl}
            onDelete={this.props.onDelete}
          />
        })}
      </div>)
  }
}

export default MessageList