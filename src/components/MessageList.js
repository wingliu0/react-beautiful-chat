import React, { Component } from 'react';
import Message from './Messages'

class MessageList extends Component {

  componentDidUpdate(prevProps, prevState) {
    const shouldScrollToBottom = this.shouldScrollToBottom()
    if (shouldScrollToBottom) {
      this.scrollList.scrollTop = this.scrollList.scrollHeight;
    }
  }

  shouldScrollToBottom() {
    return this.props.alwaysScrollToBottom || (this.scrollList.scrollTop > this.scrollList.scrollHeight - 600)
  }

  handleScroll(e) {
    if (e.target.scrollTop === 0) {
      // console.log('scrollToTop');
      // this.$emit('scrollToTop')
    }
    if (typeof this.props.onScroll === 'function') {
      this.props.onScroll(this.scrollList)
    }
  }

  render() {
    return (
      <div className="sc-message-list" ref={el => this.scrollList = el} onScroll={(e) => this.handleScroll(e)}>
        {this.props.messages.map((message, i) => {
          return <Message
            message={message}
            key={i}
            imageUrl={this.props.imageUrl}
            onDelete={this.props.onDelete}
          />
        })}
      </div>)
  }
}

export default MessageList