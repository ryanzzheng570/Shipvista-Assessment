import React from 'react'
import { connect } from 'react-redux'
import Plant from './Plant';
import { Grid } from '@material-ui/core'

const Plants = (props) => {
    const { plants } = props;
    return (
        <Grid container>
            {plants.length > 0 && plants.map((plant) => {
                return (
                    <Plant key={plant.id} plant={plant} />
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
