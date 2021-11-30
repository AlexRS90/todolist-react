import React from 'react';
import styles from './toDoItem.module.css';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: '0.4',
    textDecoration: 'line-through',
  }
  const { todo: { id, title, completed }, handleChangeProps, deleteTodoProps } = props;
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button type="button" className={styles.button} onClick={() => deleteTodoProps(id)}>
        Delete
      </button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  )
}

TodoItem.propTypes = {
  // addTodoProps: PropTypes.func.isRequired,
  todo: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

 export default TodoItem;
