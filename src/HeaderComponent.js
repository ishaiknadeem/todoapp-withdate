import React from 'react';
import {Grid, Typography, Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

function HeaderComponent(props) {

  
    return ( 
          <Grid container 
          justify="space-between"
          alignItem="center"
          style={{marginTop: '2rem'}}
          >
              <Grid item>
                <Typography variant="h4">
                    Todo
                </Typography>
              </Grid>
                <Grid item>
                    <Fab 
                    size='medium'
                    color='primary'
                    onClick={props.handleFabClick}
                    >
                        <AddIcon/>
                    </Fab>
                </Grid>
          </Grid>
    );
}

export default HeaderComponent;
