import React from 'react';
import {TextField, FormControl, InputLabel, Select, MenuItem, Grid} from '@material-ui/core';


const FormComponent = ({formik}) => {

   
    
    return (
        <Grid container direction="column" spacing={2}>
        <Grid item>
            <TextField
             label="Todo Text" 
             variant="outlined" 
                name="todoText"
                onChange={formik.handleChange}
                value= {formik.values.todoText}
            />

                    <FormControl variant="outlined" style={{width:'100%'}} >
                        <InputLabel id="priorutyLabel" style={{marginTop: '1rem'}}>Priority</InputLabel>
                        <Select
                            labelId="PriorityLabel"
                            Label="Priority"
                            name="priority"
                            onChange={formik.handleChange}
                            value= {formik.values.priority}
                            
                        >
                            
                            <MenuItem value="Low">Low</MenuItem>
                            <MenuItem value="Med">Med</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                            </Select>
                    </FormControl>
        </Grid>
        <Grid item>
            <TextField 
             label="Due Date"
             type="date"
             variant ="outlined" 
             name="dueDate"
             onChange={formik.handleChange}
            value= {formik.values.dueDate}
             style={{width:'100%'}}
             InputLabelProps={{
                    shrink:true,
                }}
            />
        </Grid>
    </Grid>
       
    )
}

export default FormComponent;
