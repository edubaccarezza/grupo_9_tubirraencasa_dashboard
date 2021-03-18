import React from 'react'
import DetalleProductos from './DetalleProductos'

export default function DataTales () {
    return (
        <div className="card shadow mb-4">
			<div className="card-body">
				<div className="table-responsive">
					<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Marca</th>
								<th>Descripción</th>
								<th>Precio</th>
								<th>Categoria</th>
								<th>Stock</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th>Nombre</th>
								<th>Marca</th>
								<th>Descripción</th>
								<th>Precio</th>
								<th>Categoria</th>
								<th>Stock</th>
							</tr>
						</tfoot>
						<tbody>
							<DetalleProductos />
						</tbody>
					</table>
				</div>
			</div>
		</div>
    )
}