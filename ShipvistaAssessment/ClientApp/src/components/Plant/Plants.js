import React from 'react'
import { connect } from 'react-redux'
import Plant from './Plant';
import { Grid } from '@material-ui/core'

//Plants component to display all plant in office
const Plants = (props) => {
    const { plants } = props;
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
