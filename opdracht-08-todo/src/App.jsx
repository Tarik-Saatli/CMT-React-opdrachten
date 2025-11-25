import { useState } from 'react';
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todolist from './components/TodoList';

function App() {
  const [textInput, setTextInput] = useState('');
  const [todo, setTodo] = useState([]);

  let name = "Tarik"

  return (
    <>
      <CreateTodo textInput={textInput} setTextInput={setTextInput} todo={todo} setTodo={setTodo} />
      <Todolist name={name} todo={todo} />

    </>
  );
}

export default App
