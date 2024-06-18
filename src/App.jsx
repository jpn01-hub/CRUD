import { useState } from 'react'
import './App.css'
import {AddTodo} from './componentes';
import {TaskList} from './componentes';
import {DisplayModal} from './componentes'

let nextId = 3;

const initialTodos = [
  { id: 0, title: 'tarea 1',description: 'primera tarea', date: '11/10/2023', done: true },
  { id: 1, title: 'tarea 2',description: 'segunda tarea', date: '11/10/2023', done: false },
  { id: 2, title: 'tarea 3',description: 'tercera tarea', date: '11/10/2023', done: false },
];

function App() {  
  const [todos, setTodos] = useState(initialTodos);
  const[modal, setModal]=useState([])
  function handleAdd(title,description,date){
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        description: description,
        date: date,
        done: false
      }
    ]);
    console.log(nextId);
  }

  function handleChange(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDelete(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }
  function deleteAll(){
    setTodos(
      todos.filter(t => t.done !== true)
    );
  }
  function displayTodo(todoID){
    const modal=document.getElementById("modal")
    const selectedTodo = todos.find((todo) => todo.id === todoID);
    setModal(selectedTodo)
    modal.style.display = "block";
  }
  window.onclick = function(event) {
    const modal=document.getElementById("modal")
    if (event.target == modal) {
      modal.style.display = "none"; 
    }
  }
  return (
    <>
      <AddTodo 
        onAddTodo={handleAdd}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChange}
        onDeleteTodo={handleDelete}
        onDisplayTodo={displayTodo}
      />
      <button  onClick={() => deleteAll()}> Eliminar Seleccion</button>
      <DisplayModal todo={modal}></DisplayModal>
    </>
    
  );
}

export default App
