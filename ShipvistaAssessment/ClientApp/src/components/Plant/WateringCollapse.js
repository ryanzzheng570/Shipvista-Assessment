import React, { useState, useEffect } from 'react';

import {
    CardActions,
    Collapse,
    Button,
    Paper,
    Typography,
} from '@material-ui/core'

const WateringCollapse = (props) => {
    const { id, stop, isWatering, selectedId } = props;

    return (
        <Collapse elevation={10} in={isWatering}>
            <CardActions>
                <Typography>Watering In Progress</Typography>
                <Button onClick={stop} color='primary' variant='contained'>Stop Watering</Button>
            </CardActions>
        </Collapse>
    )
}

export default WateringCollapse
