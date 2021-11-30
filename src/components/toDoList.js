import React from 'react';
import TodoItem from './toDoItem';
import PropTypes from 'prop-types';

const TodosList = ({ todos, handleChangeProps, deleteTodoProps }) => { 
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodosList;