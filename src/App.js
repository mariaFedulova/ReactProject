import './App.css';
import Message from './components/Message';

const text = "Всем Привет!"
function App(props) {
  return (
    <div className='App'>
      <header className='App-header'>
        My First React App
        <h3>Hello, {props.name}!</h3>
        <Message text={text} />
      </header>
    </div>
  );
}

export default App;
