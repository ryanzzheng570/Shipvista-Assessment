import React from 'react'
import { connect } from 'react-redux'
import Plant from './Plant';

const Plants = (props) => {
    const { plants } = props;
    return (
        <>
            {plants.length > 0 && plants.map((plant) => {
                return (
                    <Plant plant={plant} />
                )
            })}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        plants: state.plants
    }
}

export default connect(mapStateToProps, null)(Plants)
