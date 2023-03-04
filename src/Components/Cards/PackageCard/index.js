import React from 'react'
import './index.css'

export const PackageCard = ({data}) => {
    return (
        <div>
            <p>{data.guia}</p>
            <p>{data.origen}</p>
            <p>{data.destino}</p>
            <p>{data.fechaSalida}</p>
            <p>{data.estatus}</p>
            {
                data.estatus==="Entregado" ?
                    <img alt={"ReporteClickeable"}/> : 
                    <img alt={"ReporteNoClickeable"}/>
            }
        </div>
    )
}
