import React, {useState, useEffect } from 'react';

function DetalleProductos() {
    
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
            .then(res => res.json())
            .then(data => 
                // console.log(data.productos)
                setProductos(data.productos)
                )  
    }, [])


    return (
        <>
            {
                productos.map((producto, i) => {
                    return (
                        <tr key={i}>
                            <td>{producto.nombre}</td>
                            <td>{producto.marca}</td>
                            <td>{producto.descripcion}</td>
                            <td>$ {producto.precio}</td>
                            <td>{producto.categoriaDeEsteProducto.nombre}</td>
                            <td>{producto.stock}</td>
                        </tr>
                    )
                })
            }
        </>
    )        
}

export default DetalleProductos;