import { FilterType } from '../types/Todo';

interface FilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeTodosCount: number;
  completedTodosCount: number;
  onClearCompleted: () => void;
}

export const Filter = ({ 
  currentFilter, 
  onFilterChange, 
  activeTodosCount, 
  completedTodosCount,
  onClearCompleted 
}: FilterProps) => {
  return (
    <div className="filter-container">
      <div className="todo-count">
        {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
      </div>
      
      <div className="filter-buttons">
        <button
          className={currentFilter === 'all' ? 'active' : ''}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={currentFilter === 'active' ? 'active' : ''}
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={currentFilter === 'completed' ? 'active' : ''}
          onClick={() => onFilterChange('completed')}
        >
          Completed
        </button>
      </div>
      
      {completedTodosCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="clear-completed"
        >
          Clear completed
        </button>
      )}
    </div>
  );
};