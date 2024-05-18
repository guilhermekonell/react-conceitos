import { useRef } from "react";
import { useState } from "react"
import Item from "./components/Item/Item";

import styles from './App.module.css'

function App() {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  function handleCreateTodo() {
    const newTodo = {
      id: todos.length + 1,
      title: inputRef.current.value,
      isCompleted: false
    }

    setTodos([...todos, newTodo]);
  }

  function handleCompleteTodo(id) {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex === -1) {
      return;
    }

    const newTodos = [...todos];

    newTodos[todoIndex].isCompleted = true;

    setTodos(newTodos);
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>TODO List</h1>

      <div className={styles.inputGroup}>
        <input className={styles.input} type="text" placeholder="Nova tarefa..." ref={inputRef} />
        <button className={styles.button} onClick={handleCreateTodo}>Adicionar</button>
      </div>

      <div className={styles.todos}>
        {todos.length > 0 && todos.map((todo) => (
          <Item todo={todo} handleCompleteTodo={handleCompleteTodo} />
        ))}
      </div>
    </main>
  )
}

export default App
