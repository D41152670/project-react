import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Componentes stateLess é sem stado
// Componentes stateFull é com stado
class App extends Component 
{
  /* É possivel não utilziar o construtor daclarando o state diretamente */
  /* constructor( props ) {
    super( props );
    // O bind pode ser alterado nas funções por arrow functions
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: 'Thiago Mendes',
      counter: 0
    }
  }
 */

  state = {
    name: "Thiago mendes",
    counter: 0
  }

  // isso é uma arrow function
  handlePClick = () =>
  {
    this.setState({name: 'Bom vamos ver'});
  }

  handleAClick = (event) => 
  {
    event.preventDefault();
    const { counter } = this.state; 
    this.setState( { counter: counter + 1 } );
  }

  render()
  {
    // Get the variable state
    const { name } = this.state;
    const { counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={ this.handlePClick }>
            { name }
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            link { counter }
          </a>
        </header>
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
