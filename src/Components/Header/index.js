import React from 'react'

import DropMenu from '../DropMenu'

import './index.css'

export const Header = () => {
    return (
        <div>
            <h3>SERVI-REPARTO</h3>
            <div>
                <p>Dashboard</p>
                <img alt={"LogoDashBoard"}/>
            </div>
            <div>
                <p>Capturar carga</p>
                <img alt={"LogoCarga"}/>
            </div>
            <div>
                <p>Crear bitácora</p>
                <img alt={"LogoDashboard"}/>
            </div>
            <h3>Nombre Apellido</h3>
            <DropMenu/>
        </div>
    )
}
