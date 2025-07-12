import { useState } from 'react';
import { FilterType } from './types/Todo';
import { useTodos } from './hooks/useTodos';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Filter } from './components/Filter';
import './App.css';

function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    toggleAll,
    activeTodos,
    completedTodos
  } = useTodos();

  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');

  const getFilteredTodos = () => {
    switch (currentFilter) {
      case 'active':
        return activeTodos;
      case 'completed':
        return completedTodos;
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="app">
      <header className="app-header">
        <h1>todos</h1>
      </header>
      
      <main className="main">
        <AddTodo onAdd={addTodo} />
        
        {todos.length > 0 && (
          <div className="toggle-all-container">
            <input
              type="checkbox"
              id="toggle-all"
              checked={activeTodos.length === 0}
              onChange={toggleAll}
              className="toggle-all"
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
          </div>
        )}
        
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        
        {todos.length > 0 && (
          <Filter
            currentFilter={currentFilter}
            onFilterChange={setCurrentFilter}
            activeTodosCount={activeTodos.length}
            completedTodosCount={completedTodos.length}
            onClearCompleted={clearCompleted}
          />
        )}
      </main>
    </div>
  );
}

export default App
