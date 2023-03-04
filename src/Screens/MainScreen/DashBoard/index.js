import React from 'react'

import {ListHeader} from '../../../Components/ListHeader'
import {Cards} from '../../../Components/Cards/PackageCard'

import './index.css'
import {dashboardTitles} from '../../../Utils/dashboardTitles'

const dummyData = [
    {guia:"0088",origen:"Banco Santander Cedis Vallejo",fechaSalida:"02/03/2023",estatus:"Entregado"},
    {guia:"0089",origen:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",fechaSalida:"02/03/2023",estatus:"Entregado"}
]

export const DashBoard = () => {


    return (
        <div>
            <div>
                <div>
                    <p>Buscar por guía</p>
                    <input placeholder={"# Guía"} type="text"/>
                </div>
                <div>
                    <p>Buscar por intervalo de tiempo</p>
                    <input type="date" />
                    <input type="date" />
                    <div>
                        <p>Aceptar</p>
                    </div>
                </div>
            </div>
            <div>
                <ListHeader data={dashboardTitles}/>
                {dummyData.forEach(element => {
                     <Cards data={element}/>
                })}               
            </div>
        </div>
    )
}
