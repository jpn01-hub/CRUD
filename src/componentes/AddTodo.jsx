import { useState } from 'react';

const AddTodo = ({onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
    return (
        <>
          <div className='inputs'>
            <input
            placeholder="Agregar tarea"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            placeholder="Agregar Descripcion"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type='date'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <button onClick={() => {
            setTitle('');
            setDate('')
            setDescription('')
            onAddTodo(title,description,date);
          }}>Añadir</button>
          </div>
          
        </>
      
    );
  };
  
  export default AddTodo;