import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Build a Todo App', isCompleted: false },
    { text: 'Deploy to Production', isCompleted: false },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <form
        onSubmit={e => {
          e.preventDefault();
          const input = e.target.elements.todoText;
          addTodo(input.value);
          input.value = '';
        }}
      >
        <input name="todoText" placeholder="Add a new todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoList;