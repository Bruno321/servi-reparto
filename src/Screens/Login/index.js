import React,{useContext,useState} from 'react'

import {LoginContext} from '../../Context/LoginContext'

import './index.css'

export const Login = () => {

    const {login} = useContext(LoginContext)
    const [form,setForm] = useState({
        user:"",
        password:""
    })

    const handleClick = () => {
        login("dummyToken")
    }

    return (
        <div className="login">

            <div className="login-container">

                <div className="login-title">
                    <p>Inicio de sesión</p>
                    <div></div>
                </div>

                <div className="login-inputs">
                    <input 
                        placeholder="Usuario" 
                        type="text" 
                        value={form.user} 
                        onChange={(e)=>setForm({...form,user:e.target.value})}/>
                    <input 
                        placeholder="Contraseña"
                        type="password" 
                        value={form.password} 
                        onChange={(e)=>setForm({...form,password:e.target.value})}/>
                </div>

                <div className="login-input button" onClick={handleClick}>
                    <p>Continuar</p>
                </div>
            </div>
        </div>
    )
}
