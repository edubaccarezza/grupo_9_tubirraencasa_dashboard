import React from 'react';
import Amount from './Amounts'
import LastProduct from './LastProduct'
import Categories from './Categories'
import DataTales from './DataTales'


export default function Footer () {
    return (
		<div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <Amount />
            <div className="row">

                <LastProduct />

                <Categories />
                
            </div>
            <DataTales />

        </div>
    )
}


