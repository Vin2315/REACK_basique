import React from 'react'

const Chercheur = () => {
  return (
        <div className="search">
        <h3 className="title">Cherche</h3>
        <form>
            <input type="text" id="search_field" />
            <button id="search">Chercher</button>
        </form>
        </div>
  )
}

export default Chercheur
