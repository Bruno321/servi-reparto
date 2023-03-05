import React,{useState} from 'react'

import Select from 'react-select'

// Components
import { Form } from '../../../Components/Form'
import {ListHeader} from '../../../Components/ListHeader'
import {WarningAlert} from '../../../Components/Alerts/WarningAlert'

// Static data
import { guia } from '../../../Utils/FormData/guia'

import { datos_origen } from '../../../Utils/FormData/datos_origen'
import { direccion_origen } from '../../../Utils/FormData/direccion_origen'

import { datos_destino } from '../../../Utils/FormData/datos_destino'
import { direccion_destino } from '../../../Utils/FormData/direccion_destino'

import { informacionTitles } from '../../../Utils/informacionTitles'

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

export const CapturarCarga = () => {

    const [guiaData,setGuiaData] = useState([
        {value:"",name:"consigment"},
        {value:"",name:"client"},
        {value:"",name:"clientCounter"},
        {value:"",name:"productType"},
        {value:"",name:"orderContent"},
        {value:"",name:"orderAmount"}
    ])

    const [datosOrigenData,setDatosOrigenData] = useState([
        {value:"",name:"remitter"},
        {value:"",name:"costCenter"},
        {value:"",name:"branchNumber"},
        {value:"",name:"businessName"},
    ])

    const [direccionOrigenData,setDireccionOrigenData] = useState([
        {value:"",name:"postalCode"},
        {value:"",name:"state"},
        {value:"",name:"country"},

        {value:"",name:"city"},
        {value:"",name:"suburb"},
        {value:"",name:"street"},

        {value:"",name:"outsideNumber"},
        {value:"",name:"insideNumber"},
        {value:"",name:"country"},

        {value:"",name:"mobileNumber"},
        {value:"",name:"phoneNumber"},
        {value:"",name:"email"},

    ])

    const [datosDestinoData,setDatosDestinoData] = useState([
        {value:"",name:"consignee"},
        {value:"",name:"costCenter"},
        {value:"",name:"branchNumber"},
        {value:"",name:"businessName"},
    ])

    const [direccionDestinoData,setDireccionDestinoData] = useState([
        {value:"",name:"postalCode"},
        {value:"",name:"state"},
        {value:"",name:"country"},

        {value:"",name:"city"},
        {value:"",name:"suburb"},
        {value:"",name:"street"},

        {value:"",name:"outsideNumber"},
        {value:"",name:"insideNumber"},
        {value:"",name:"country"},

        {value:"",name:"mobileNumber"},
        {value:"",name:"phoneNumber"},
        {value:"",name:"email"},
        
        {value:"",name:"references "},

    ])

    const handleGuiaData = (index,value) => {
        let data = [...guiaData];
        data[index].value = value
        setGuiaData(data)
    }

    const handleDatosOrigenData = (index,value) => {
        let data = [...guiaData];
        data[index].value = value
        setDatosOrigenData(data)
    }

    const handleDireccionOrigenData = (index,value) => {
        let data = [...guiaData];
        data[index].value = value
        setDireccionOrigenData(data)
    }

    const handleDestinoOrigenData = (index,value) => {
        let data = [...guiaData];
        data[index].value = value
        setDatosDestinoData(data)
    }

    const handleDestinoDireccionData = (index,value) => {
        let data = [...guiaData];
        data[index].value = value
        setDireccionDestinoData(data)
    }


    return (
        <div className='capturarCarga'>
            <Form data={guia} values={guiaData} setValue={handleGuiaData}/>
            <div className='separator-load green'></div>
            <Form data={datos_origen} values={datosOrigenData} setValue={handleDatosOrigenData}/>
            <Form data={direccion_origen} values={direccionOrigenData} setValue={handleDireccionOrigenData}/>
            <div className='add-button-container'>
                    <div className='search-button button'>Grabar remitente</div>
                </div>
            <div className='separator-load orange'></div>
            <Form data={datos_destino} values={datosDestinoData} setValue={handleDestinoOrigenData}/>
            <Form data={direccion_destino} values={direccionDestinoData} setValue={handleDestinoDireccionData}/>
            <div className='add-button-container'>
                    <div className='search-button button'>Grabar remitente</div>
                </div>
            <div className='form'>
                <div className='form-title'>Información</div>
                <WarningAlert/>
                <ListHeader data={informacionTitles}/>
                <div className='list-form'>
                    <div>
                        <Select 
                            className='list-form-select'
                            styles={{
                                control:(baseStyles,state)=>({
                                    ...baseStyles,
                                    padding:"10px",
                                    width:"14vw"
                                })
                            }}
                            // value={value.value}
                            // onChange={(e)=>setValue(index,e.target.value)}
                            placeholder={"-- SELECCIONE --"}
                            isClearable={true}
                            options={options}
                        />
                        <Select 
                            className='list-form-select'
                            styles={{
                                control:(baseStyles,state)=>({
                                    ...baseStyles,
                                    padding:"10px",
                                    width:"14vw"
                                })
                            }}
                            // value={value.value}
                            // onChange={(e)=>setValue(index,e.target.value)}
                            placeholder={"-- SELECCIONE --"}
                            isClearable={true}
                            options={options}
                        />
                    </div>
                    <div>
                        <input />
                        <input />
                    </div>
                    <div>
                        <input />
                        <input />
                    </div>
                    <div>
                        <input />
                        <input />
                    </div>
                    <div>
                        <input />
                        <input />
                    </div>
                    <div>
                        <img src={require('../../../Assets/Icons/borrar.svg')} />
                        <img src={require('../../../Assets/Icons/borrar.svg')} />
                    </div>
                </div>
                <div className='add-button-container'>
                    <div className='search-button button'>+ Agregar</div>
                </div>
                <div className='generate-guide-button-container'>
                    <div className='generate-guide button'>Generar guía</div>
                </div>
            </div>
        </div>
    )
}
