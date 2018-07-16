import React from 'react';

class Rest extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    fetch('https://ngapi4.herokuapp.com/api/getProducts')
      .then(response => response.json())
      .then(json => {
        this.setState({
          posts: json
        })
      })
  }
  render() {
    return (
      <div>
        <h5>{this.state.posts.title}</h5>
        <p>{this.state.posts.body}</p>
      </div>
    );
  }
}

export default Rest;