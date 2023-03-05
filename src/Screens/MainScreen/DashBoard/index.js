import React from 'react'

import {ListHeader} from '../../../Components/ListHeader'
import {PackageCard} from '../../../Components/Cards/PackageCard'

import './index.css'
import {dashBoardTitles} from '../../../Utils/dashBoardTitles'

const dummyData = [
    {counter:"0088",origin:"Cedis Cuernavaca",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:0},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
    {counter:"0089",origin:"Otilio Montaño 661, Cuernavaca, Morelos, Mexico",destiny:"Banco Santander Cedis Vallejo",exitDate:"02/03/2023",status:1},
]

export const DashBoard = () => {
    return (
        <div className="dashboard">
            <div className='dashboard-filter-container'>
                <div className='dashboard-guia-filter'>
                    <p>Buscar por guía</p>
                    <input placeholder={"# Guía"} type="text"/>
                    <div className='search-button button'>Buscar</div>
                </div>
                <div className='dashboard-fecha-filter'>
                    <p>Buscar por intervalo de tiempo</p>
                    <label>Fecha inicial</label>
                    <input type="date" />
                    <label>Fecha final</label>
                    <input type="date" />
                    <div className='search-button button'>Buscar</div>
                </div>
            </div>
            <ListHeader data={dashBoardTitles}/>
            <div className='dashboard-card-container'>
                {dummyData.map(element => {
                    return (
                        <div key={element.counter}>
                            <PackageCard data={element}/>
                        </div>
                    )
                })} 
            </div>
        </div>
    )
}
