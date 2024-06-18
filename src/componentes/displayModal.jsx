

const DisplayModal = ({todo}) => {
    if (!todo) {
        return null;
      }
    return (
        <>
          <div className="modal" id="modal">
            <div className="modal-content">
                <h2>{todo.title}</h2>
                <hr/>
                <p>Descripcion: {todo.description}</p>
                <p>Fecha: {todo.date}</p>  
            </div>
            
          </div>
        </>
      
    );
  };
  
  export default DisplayModal;