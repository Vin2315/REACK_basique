import React, { useState } from 'react';

export const FormulaireComposant = () => {

            // para que aparesca en panatalla//luego el setUser(user); luego el Div lo declaro al inicio de la pagina  
    const [user, setUser] = useState ({});
            
        // para que aparesca los datos del usuario 
    const LoadDataForms = e =>{
        e.preventDefault();

        let data = e.target;
        let user ={
            name: data.name.value,
            lastname:data.lastname.value,
            genero:data.genero.value,
            biblio:data.biblio.value,
            send:data.sent.value
        };

        console.log(user);
        setUser(user);
    }

    const changeData = e =>{
        let name_del_input = e.target.name;
        let name_pour_modifie = user;

        setUser(estado_previo => ({
             ...estado_previo, 
             [name_del_input]: e.target.value
            }) 
        );
    }
    return (
        <div>
            <h1>Formulaires avec React</h1>
            
            {/* //para que se muestre la caja si todo escribe en la caja y muestra los valore por */}
            { user.biblio && user.biblio.length >= 1 && 
                (
                    <div className='info_user label label-gray' >
                        {user.name} {user.lastname} son genero est {user.genero} et sa Biographie est <p>{user.biblio}</p>
                    </div>
                )
            }
            {/* //onsubmit esta ejecuta una opcion cuando envie el formulario */}
            <form onSubmit={LoadDataForms}>
                <input type ="text" 
                       placeholder='name' 
                       name="name"
                       onChange={changeData}>
                </input>
                
                <input type ="text" 
                        placeholder='lastname' 
                        name="lastname"
                        onChange={changeData}>
                </input>
                
                <select name="genero"  onChange={changeData}>
                    <option value="homme" >Homme</option>
                    <option value="femme" >Femme</option>    

                </select>
                <textarea placeholder='bibliography' 
                name="biblio"
                onChange={changeData}></textarea>

                <input type ="submit" value="Send" name="Send"></input>
                

            </form>            


        </div>
    )
}


// onchange permite cer como se cambio la info en las pantalla 


export default FormulaireComposant;
