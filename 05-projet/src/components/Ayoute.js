import React from 'react'



const Ayoute = () => {

  const title= "Ayoute de Cours";
  const [coursState,setCours] = useState ({
    title: '', 
    description: ''

  });

  // envia informacion sin recargar la pagina e = objeto del evento preventDatafault metodo prevee no se envia pagina 

    const loadDataForm = e => {
    e.preventDetafault();

    // consigue todos los datos del formulario 

    let target = e.target;
    let title = target.title.value; 
    let description = target.description.value; 
    
    // crear objeto de les cours 

    let cours = {
        id: new Date().getTime(), 
        title, 
        description 
    }; 
    setCours(cours);
    console.log(coursState);


  };

  return (
    <div>

      <div className="add">
          <h3 className="title"> {titleComponent} </h3>

          <strong>
            {(coursState.title && courState.description ) && "Vous avez créé un nouveau cours"}
          </strong>
              {/* vinculamos un evento y este es el onSubmit para recojer la info */}
          <form onSubmit={loadDataForm}>
              <input type="text" 
                    id="title" 
                    name="title"
                    placeholder="Title" />
              <textarea 
                    id="description"
                    name="description" 
                    placeholder="Descripción Cours"></textarea>
              <input
                    type="submit" 
                    id="save" 
                    value="Guardar" />
          </form>
      </div>
    
    </div>
  )
}

export default Ayoute
