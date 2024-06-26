import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message';

const user1 = "Maria";
const bot = "Bot";
const botAnswer = "Ok";
function App(props) {
  const [messageList, setMessageList] = useState([]);

  const [value, setValue] = useState('');

  const renderMessageList = () => {
    if (messageList.length !== 0) {
      return <div className='Message-list'>{
        messageList.map((message) => <Message text={message.text} author={message.author} />)
      }
      </div>
    } else {
      return <div className='Message-list'></div>
    }

  };

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const renderSendForm = () => {
    return (
      <form className='SendForm'>
        <input type='text' className='SendForm-input' value={value} onChange={handleChange} placeholder='Напишите что-нибудь' />
        <button type='button' className='SendForm-button' onClick={sendMessage}>&#10148;</button>
      </form>
    );
  }

  const sendMessage = () => {
    setMessageList([
      ...messageList,
      { text: value, author: user1 }
    ]);
    setValue('');
  }

  useEffect(() => {
    if (messageList.length !== 0) {
      if (messageList.at(-1).author !== 'Bot') {
        const timeoutId = setTimeout(() => {
          setMessageList([
            ...messageList,
            { text: botAnswer, author: bot }
          ]);
        }, 1500);

        return () => clearTimeout(timeoutId)
      }
    }
  }, [messageList])

  return (
    <div className='App'>
      <header >
      </header>
      <main className='container'>
        {renderMessageList()}
        {renderSendForm()}
      </main>
    </div>
  );
}

export default App;