import React, { Component } from "react";
import { connect } from "react-redux";
import { uuid } from "uuidv4";

import "./App.css";

class App extends Component {
  render() {
    // console.log(">>> The state is >>> ", {
    //   messages: this.props.messages,
    //   users: this.props.users
    // });
    const { users, messages, chatList } = this.props;
    return (
      <div>
        <header className="head-style">
          Welcome to Chatty Kathy{" "}
          <img
            id="logo"
            src={require("./logo.png")}
            style={{ width: 100, height: 100 }}
            alt="logo"
          />
        </header>
        <div id="container" className="App">
          <aside id="sidebar" className="sidebar">
            <h2>User List: </h2>
            <ul>
              {users.userList.map(user => {
                return (
                  <li key={uuid()}>
                    <span>
                      <b>{user.userName}</b>
                    </span>
                  </li>
                );
              })}
            </ul>
          </aside>
          <div id="main">
            <span>
              You Are Sending Messages As: <b>{messages.userName}</b>
            </span>
            <br />
            <br />
            <div id="new-message">
              <b>Your Message:</b> {messages.text}
            </div>
            <h2>Current Chat List: </h2>
            <ul>
              {chatList.map(message => {
                return (
                  <li key={uuid()}>
                    <span>
                      <b>{message.userName}:</b> {message.text}
                    </span>
                    <br />
                  </li>
                );
              })}
            </ul>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(storeState) {
  return storeState;
};

/* The connect function makes the state returned from
the mapStateToProps function available to the App component as props */
export default connect(mapStateToProps)(App);
