import React, {useState, useEffect } from 'react'
import '../../../assets/css/style.css'

export default function LastProduct () {
    
    const [imagen, setImagen] = useState(undefined);
    const [descripcion, setDescripcion] = useState('');
    const [id, setId] = useState(undefined);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data.productos[data.productos.length - 2].imagendeesteproducto[0].imagenes)
                setImagen(data.productos[data.productos.length - 1].imagendeesteproducto[0].imagenes)
            })

    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(data => {
                setDescripcion(data.productos[data.productos.length - 1].descripcion)
            })

    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(data => {
                setId(data.productos[data.productos.length - 1].id)
            })

    }, [])


    return (			
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Último producto cargado</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost:3001/images/products/" + imagen} alt="Last Product" />
                        </div>
                        <p>{descripcion}</p>
                        <a target="_blank" rel="nofollow" href={"http://localhost:3001/products/" + id}>Vea aquí el detalle del producto</a>
                    </div>
                </div>
            </div>
    )
}