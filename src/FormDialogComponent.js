import React from 'react'
import {Dialog, Button, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import FormComponent from './FormComponent'

const FormDialogComponent = (props) => {
   
    return (
        <Dialog open={props.open} onClose={props.handleClose} style={{minWidth:'60vw'}}>
           <DialogTitle>
               {props.isEditMode? 'Update': 'Add' } Todo
           </DialogTitle>
           <DialogContent>
              <FormComponent
                  formik={props.formik}
              />
           </DialogContent>
           <DialogActions>
           <Button onClick={props.handleClose}>
                   Cancel
               </Button>
               <Button color="primary"
               onClick={props.handleSubmit}>
               {props.isEditMode? 'Update': 'Add' }
               </Button>
              
           </DialogActions>
        </Dialog>
    )
}

export default FormDialogComponent;
