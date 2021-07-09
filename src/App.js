import './App.css';
import { Component } from 'react';

/* Main class extends component */
class App extends Component 
{
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "title 1",
        body: "This is the body post 1"
      },
      {
        id: 2,
        title: "title 2",
        body: "This is the body post 2"
      },
      {
        id: 3,
        title: "title 3",
        body: "This is the body post 3"
      },
    ]
  }

  componentDidMount() 
  {
    this.handleTimeOut();
  }

  componentDidUpdate()
  {
    /* this.handleTimeOut(); */
  }

  handleTimeOut = () =>
  {
    // Get the variable state
    const { posts, counter } = this.state;
    posts[0].title = "olá um novo titulo";

    setTimeout(() => {
        this.setState({posts, counter: counter + 1});
      }, 1000);
  }

  render()
  {
    // Get the variable state
    const { posts, counter } = this.state;

    return (
      <div className="App">
        { posts.map( post => (
          <div key={post.id}>
            <h1 > { post.title } </h1>
            <div> {post.body} </div>
            <div> { counter } </div>
          </div>
        )) }
      </div>
    );
  }
}

export default App;
