import React, { Component } from "react";

import PostsList from "./PostsList";
import SelectedPostsList from "./SelectedPostsList";

class App extends Component {
  render() {
    return (
      <div>
        <h4>Selected Posts</h4>
        <SelectedPostsList />
        <hr />
        <h4>All Posts</h4>
        <PostsList />
      </div>
    );
  }
}

export default App;
