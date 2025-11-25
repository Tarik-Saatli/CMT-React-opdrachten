import { useState } from 'react';
import './App.css'
import CreateMessage from './components/CreateMessage'
import Messagelist from './components/MessageList';

function App() {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);

  let name = "Tarik"

  return (
    <>
      <CreateMessage textInput={textInput} setTextInput={setTextInput} message={message} setMessage={setMessage} />
      <Messagelist name={name} message={message} />

    </>
  );
}

export default App
