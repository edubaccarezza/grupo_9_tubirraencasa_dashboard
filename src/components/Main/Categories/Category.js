import React, {useState , useEffect} from 'react'

function Category() {

  const [categorias, setCategorias] = useState([]);

  useEffect( () => {
      fetch('http://localhost:3001/api/products')
          .then(res => res.json())
          .then(data => setCategorias(data.countByCategory)) 
          
  }, {})

  return (
      <div>
          {
            categorias.map((value, i) => {
              return (
                <div className="col-lg-6 mb-4" key={i}>
                  <div className="card bg-info text-white shadow" >
                    <div className="card-body" >
                      <h6><strong>{value.categoria}: </strong>{value.cantidad} Unidad/es</h6>  
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>
    )   
}

export default Category

// setCategorias(data.countByCategory)