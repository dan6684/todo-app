import { Todo } from '../types/Todo';

const STORAGE_KEY = 'todos';

export const loadTodos = (): Todo[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const todos = JSON.parse(stored);
    return todos.map((todo: any) => ({
      ...todo,
      createdAt: new Date(todo.createdAt)
    }));
  } catch (error) {
    console.error('Failed to load todos from storage:', error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Failed to save todos to storage:', error);
  }
};