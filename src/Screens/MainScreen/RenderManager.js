import React from 'react'

// Screens
import {CapturarCarga} from './CapturarCarga'
import {CrearBitacora} from './CrearBitacora'
import {DashBoard} from './DashBoard'

export const RenderManager = ({screen}) => {

    const handleRender = [
        <DashBoard/>,
        <CapturarCarga/>,
        <CrearBitacora/>,
    ]

    return (
        <>
            {handleRender[screen]}
        </>
    )
}
