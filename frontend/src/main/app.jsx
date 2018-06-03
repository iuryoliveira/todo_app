import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

//class é uma palavra reservada, usar por exemplo className
export default props => (
    <div className="container">
        <Menu />
        <h1>Componente app</h1>
        <Todo />
        <About />
    </div>
)