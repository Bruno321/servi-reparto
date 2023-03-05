import React from 'react'
import './index.css'

export const PackageCard = ({data}) => {
    return (
        <div className='packageCard'>
            <p style={{flex:"1"}}>{data.counter}</p>
            <p style={{flex:"3"}}>{data.origin}</p>
            <p style={{flex:"3"}}>{data.destiny}</p>
            <p style={{flex:"1"}}>{data.exitDate}</p>
            <p style={{flex:"1"}}>{data.status===0? "Entregado":"En proceso"}</p>
            <div style={{flex:"1"}} >
                {
                    data.status===0 ?
                        <img
                            src={require('../../../Assets/Icons/pdf_clickeable.svg')} 
                            alt={"ReporteClickeable"}
                            /> : 
                        <img
                            src={require('../../../Assets/Icons/pdf_no_clickeable.svg')} 
                            alt={"ReporteNoClickeable"}
                            />
                }
            </div>
        </div>
    )
}
