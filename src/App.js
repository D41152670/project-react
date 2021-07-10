import './App.css';
import { Component } from 'react';

/* Main class extends component */
class App extends Component 
{
  state = {
    counter: 0,
    posts: []
  }

  componentDidMount() 
  {
    this.loadPosts();
  }

  loadPosts =  async () =>
  {

    /* .then(Response => Response.json())
    .then(posts => this.setState({posts})) */
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })

    this.setState({ posts: postsAndPhotos })
  }

  render()
  {
    // Get the variable state
    const { posts, counter } = this.state;

    return (
      <section className="container">
        <div className="posts">
        { posts.map( post => (
          <div className="post" key={post.id} >
            <img src={post.cover} alt={post.title} className="img" />
            <div  className="post-content">
              <h1 > { post.title } </h1>
              <div> {post.body} </div>
              <div> { counter } </div>
            </div>
          </div>
        )) }
      </div>
      </section>
      
    );
  }
}

export default App;
