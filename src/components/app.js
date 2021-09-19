import React, { Component } from "react";

import PostsList from "./PostsList";

class App extends Component {
  render() {
    return (
      <div>
        <h4>Selected Posts</h4>
        <hr />
        <h4>All Posts</h4>
        <PostsList />
      </div>
    );
  }
}

export default App;
