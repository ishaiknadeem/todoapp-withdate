import React from 'react';
import {ButtonGroup, IconButton, Chip, Grid, Paper, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Zoom from '@material-ui/core/Zoom';


import './todo.css'





const getTextDecor = (done) => {
    return (done? 'line-through': 'none')
}

function TodoListComponent(props) {
    return (
        <Grid container direction="column" spacing={2} style={{marginTop: '1.2rem'}}
        >
            {
                props.todos.map(todo =>{
                
                    return (
                    
                        <Zoom in={true} style={{ transitionDelay: '500ms' }}>

                        <Grid item>
                            <Paper style={{padding:'0.8rem'}} elevation={3}>
                                <Grid container 
                                alignItems="center"
                                justify="space-between"
                                >
                                    <Grid item style={{marginTop: '1.2rem'}}> 
                                        <Typography variant="h6"
                                        style={{textDecoration: getTextDecor(todo.done)}}>
                                        {todo.val}
                                        </Typography>
                                        
                                    </Grid>
                                    <Grid>
                                    <Chip 
                                    color="primary"
                                    label={todo.priority}
                                    size="small"
                                    onClick= {() =>{
                                        props.handlePriorityClick(todo.priority)
                                    }}>
                                    </Chip>
                                    </Grid>
                                </Grid>
                                    <Typography variant="body2">
                                        Due: {todo.dueDate}
                                    </Typography>
                                    <ButtonGroup 
                                    
                                    size="small"
                                    color="primary"
                                    variant="text"
                                    color="primary" 
                                    style={{paddingTop:'12px'}}
                                    >
                                        <IconButton
                                        onClick={()=>{
                                            props.handleDelete(todo.id);
                                        }}>
                                            <DeleteIcon/>
                                        </IconButton>
                                        <IconButton
                                        onClick ={()=>{
                                            props.handleEditClick(todo);
                                        }} 
                                        >
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton
                                        onClick= {()=>{
                                            props.handleMarkDone(todo)
                                        }}>
                                            <DoneIcon/>
                                        </IconButton>
                                        </ButtonGroup>
                            </Paper>

                        </Grid>

                        </Zoom>
                    )
                })
            }
        </Grid>

    );
}

export default TodoListComponent;
 