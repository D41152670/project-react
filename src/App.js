import './App.css';
import { Component } from 'react';

import { loadPosts } from './utils/load.posts';
import { Posts } from './components/Posts';

/* Main class extends component */
class App extends Component 
{
  state = {
    counter: 0,
    tituloSite: "Titulo do site",
    posts: []
  }

  async componentDidMount() 
  {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();

    this.setState({ posts: postsAndPhotos })
  }

  render()
  {
    // Get the variable state
    const { posts, tituloSite } = this.state;

    return (
      <section className="container">
        <h1 className="titulo-site"> {tituloSite} </h1>
        <Posts posts={posts} />
      </section>
      
    );
  }
}

export default App;
