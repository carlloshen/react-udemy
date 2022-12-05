import ReactDOM from 'react-dom'
//No import acima, podemos usar qualquer nome para chamar o react-dom
import React from 'react'
import "./style.css"
import App from './App'


ReactDOM.render(
    <App/>,
     document.querySelector("#root")
)