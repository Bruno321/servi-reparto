import React from 'react'

// Components
import { WarningAlert } from '../../../Components/Alerts/WarningAlert'

import Select from 'react-select'

import './index.css'

const options = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9'},
    { value: 'blue', label: 'Blue', color: '#0052CC'},
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630'},
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

export const CrearBitacora = () => {
    return (
        <div className='CrearBitacora'>
            <div className='form'>
                <div className='form-title'>Bitacora de guías pendientes de recolectar</div>
                <WarningAlert/>
                <div className='form-bitacoras'>
                    <div className='formInput'>
                        <label>Cliente:(*)</label>
                        <input 
                            type={"text"}
                            placeholder="Cliente"
                            // value={value.value}
                            // onChange={(e)=>setValue(index,e.target.value)}
                        />
                    </div>

                    <div className='formInput'>
                        <label>Producto:</label>
                        <input 
                            type={"text"}
                            placeholder="Producto"
                            // value={value.value}
                            // onChange={(e)=>setValue(index,e.target.value)}
                        />
                    </div>

                    <div className='formInput'>
                        <label>Remitente(razon social):</label>
                        <Select 
                            className='formInput-select'
                            // value={value.value}
                            // onChange={(e)=>setValue(index,e.target.value)}
                            placeholder="Razon social"
                            isClearable={true}
                            options={options}
                        />
                    </div>

                    <div className='formInput'>
                        <label>Plaza Origen:</label>
                        <input 
                            type={"text"}
                            placeholder="Plaza Origen"
                            // value={value.value}
                            // onChange={(e)=>setValue(index,e.target.value)}
                        />
                    </div>
                    <div className='formInput'>
                        <label>Fecha de Captura(Inicial):</label>
                        <input 
                            type={"date"}
                            // value={value.value}
                            // onChange={(e)=>setValue(index,e.target.value)}
                        />
                    </div>
                    <div className='formInput'>
                        <label>Fecha de Captura(Final):</label>
                        <input 
                            type={"date"}
                            placeholder="Plaza Origen"
                            // value={value.value}
                            // onChange={(e)=>setValue(index,e.target.value)}
                        />
                    </div>
                    <div className='formInput'>
                        <label>Plaza destino:</label>
                        <Select 
                            className='formInput-select'
                            // value={value.value}
                            // onChange={(e)=>setValue(index,e.target.value)}
                            placeholder="-- Seleccione la plaza de destino --"
                            isClearable={true}
                            options={options}
                        />
                    </div>   
                    <div className='formInput'>
                        <label>Hora de Captura:</label>
                        <input 
                            type={"time"}
                            // value={value.value}
                            // onChange={(e)=>setValue(index,e.target.value)}
                        />
                    </div>                 
                </div>
            </div>
            <div className='generate-guide-button-container'>
                <div className='generate-guide button'>Crear reporte</div>
            </div>
        </div>
    )
}
