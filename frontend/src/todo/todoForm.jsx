import React from 'react'
import PageHeader from '../template/pageHeader'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'></input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'>
                <i className='fa fa-plus'></i>
            </IconButton>
        </Grid>
    </div>
)
