import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}