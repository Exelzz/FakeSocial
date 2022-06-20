import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Eduard" timeAgo="Today at 4:45PM" content="bu gün guzel bir gun" />
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" content="Evet gerçekten güzel bir gün" />
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" content="benim için aynısın söyliyemem" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
