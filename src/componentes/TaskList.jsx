import { useState } from 'react';


const TaskList = ({  todos, onChangeTodo, onDeleteTodo,onDisplayTodo }) => {
    return (
        <ul className='lista'>
          {todos.map(todo => (
            <li key={todo.id}>
              <Task
                todo={todo}
                onChange={onChangeTodo}
                onDelete={onDeleteTodo}
                onDisplay={onDisplayTodo}
              />
            </li>
          ))}
        </ul>
      );
    }
    
    function Task({ todo, onChange, onDelete, onDisplay}) {
      const [isEditing, setIsEditing] = useState(false);
      let todoContent;
      if (isEditing) {
        todoContent = (
          <>
            <input
              value={todo.title}
              onChange={e => {
                onChange({
                  ...todo,
                  title: e.target.value
                });
              }} />
            <button onClick={() => setIsEditing(false)}>
              Guardar
            </button>
          </>
        );
      } else {
        todoContent = (
          <>
            {todo.title}
            <button onClick={() => setIsEditing(true)}>
              Editar
            </button>
          </>
        );
      }
      
      return (
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={e => {
              onChange({
                ...todo,
                done: e.target.checked
              });
            }}
          />
          {todoContent}
          <button onClick={() => onDelete(todo.id)}>
            Eliminar
          </button>
          <button onClick={() => onDisplay(todo.id)}>
            Ver
          </button>
        </label>
      );

  };
  
  export default TaskList;