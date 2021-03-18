import React, {useState} from 'react'
import Card from './Card/card'

export default function Amounts () {
    const [productos,  setProductos] = useState({});
    const [usuarios,  setUsuarios] = useState({});

    
    const handleClick = () => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(dataProducts => setProductos(dataProducts))
        fetch('http://localhost:3001/api/users')
            .then(res => res.json())
            .then(dataUsers => setUsuarios(dataUsers))
    }

    // const cargarDatos = () => {
    //     let headers = {
    //         'Content-type' : "application/json"
    //     }
    //     let config = {
    //         method: 'POST',
    //         headers,
    //         body: JSON.stringify({titulo: "LALALA", description: "Clase de LALALA"})
    //     }       
        
    //     fetch('http://localhost:3001/api/products')
    //         .then(res => res.json())
    //         .then(data => setProductos(data))
    // }

    return (
        <div>
            <button 
                className="btn btn-primary"
                onClick={handleClick}>
                Cargar Info
            </button>
            <div className="row">

                {/* <!-- Amount of Products in DB --> */}
                <Card 
                    border = "card border-left-primary shadow h-100 py-2"
                    textColor = "text-xs font-weight-bold text-primary text-uppercase mb-1"
                    text = "Productos Disponibles"
                    content = {productos.count}
                    icon = "fas fa-clipboard-list fa-2x text-gray-300"
                />

                {/* <!-- $$$ of all products in DB --> */}
                <Card 
                    border = "card border-left-success shadow h-100 py-2"
                    textColor = "text-xs font-weight-bold text-success text-uppercase mb-1"
                    text = "Categorias"
                    content = {'La base tiene 4 categorias disponibles'}
                    icon = "fas fa-dollar-sign fa-2x text-gray-300"
                />

                {/* <!-- Amount of users in DB --> */}
                <Card 
                    border = "card border-left-warning shadow h-100 py-2"
                    textColor = "text-xs font-weight-bold text-warning text-uppercase mb-1"
                    text = "Usuarios Registrados"
                    content = {usuarios.count}
                    icon = "fas fa-user-check fa-2x text-gray-300"
                />

            </div>
        </div>    
    )
}