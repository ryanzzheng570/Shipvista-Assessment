import React from 'react'
import { connect } from 'react-redux'
import Plant from './Plant';
import { Grid } from '@material-ui/core'

const Plants = (props) => {
    const { plants } = props;
    console.log(plants);
    return (
        <Grid container>
            {plants.length > 0 && plants.map((plant) => {
                return (
                    <Plant
                        key={plant.id}
                        name={plant.name}
                        id={plant.id}
                        lastWateringTime={plant.lastWateringTime}
                    />
                )
            })}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        plants: state.plants
    }
}

export default connect(mapStateToProps, null)(Plants)
