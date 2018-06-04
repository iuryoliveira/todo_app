import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3005/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this) 
        this.handleChange = this.handleChange.bind(this)
        this.refresh = this.refresh.bind(this)
        this.refresh();
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }   

    handleChange(e){
        this.setState({...this.state, description: e.target.value })
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState( {...this.setState, description: '', list: resp.data} ))
    }
    
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TodoList list={this.state.list}/>
            </div>
        )
    }
}