import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
    },
    appBar: {
        background: 'linear-gradient(45deg, #27b327 45%, #3fda62, white)'
    }
}));

//App bar component hook 
const Appbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                    <Typography variant='h6'>
                        Watering the Office Plants
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Appbar
