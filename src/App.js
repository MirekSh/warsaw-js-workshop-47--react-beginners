import React from 'react';
import Message from './Message';

const messages = [
  {
    text: 'Hello',
    sender: 'Mateusz',
    date: Date.now(),
  },
  {
    text: 'hi!',
    sender: 'Mateusz',
    date: Date.now(),
  }
]

const App = () => {
  const messagesElements = messages.map(message => <Message text={message.text}/>)
  return (
    <div>
      <h1>Hello React</h1>
      <h1>Hello React</h1>
      {messagesElements}
    </div>
  )
}

export default App;
