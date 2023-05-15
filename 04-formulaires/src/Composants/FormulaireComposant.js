import React, { useState } from 'react'

export const FormulaireComposant = () => {

    // para que aparesca en panatalla//luego el setUser(user); luego el Div 
    const [user, setUser] = useState ({});
    // para que aparesca los datos del usuario 
    
    const LoadDataForms = e =>{
        e.preventDefault();

        let data = e.target;
        let user ={
            name: data.name.value,
            lastname:data.lastname.value,
            sex:data.sex.value,
            biblio:data.biblio.value
        };

        console.log(user);
        setUser(user);
    }

    return (
        <div>
            <h1>Formulaires avec React</h1>

            <div className='info_user' aria-label='' >
                {user.name} {user.lastname} son sex est {user.sex} et sa Biographie est <p>{user.biblio}</p>
            </div>

            <form onSubmit={LoadDataForms}>
                <input type ="text" 
                       placeholder='name' 
                       name="name">
                </input>
                
                <input type ="text" 
                        placeholder='lastname' 
                        name="lastname">

                </input>
                
                <select name="sex">
                    <option value="homme" >Homme</option>
                    <option value="femme" >Femme</option>    
                </select>
                <textarea placeholder='bibliography' name="biblio"></textarea>

                <input type ="submit" value="Send" ></input>
                

            </form>            


        </div>
    )
}

export default FormulaireComposant
