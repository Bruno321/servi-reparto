import React from 'react'
import './index.css'

export const ListHeader = ({data}) => {
    return (
        <div>
            {data.forEach(element => {
                return(
                    <p>{element}</p>
                )
            })}
            <div></div>
        </div>
    )
}
