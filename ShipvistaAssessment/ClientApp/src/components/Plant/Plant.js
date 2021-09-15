import React from 'react'
import PlantIcon from '../Icons/PlantsIcon'

const Plant = ({ plant }) => {
    return (
        <div>
            <PlantIcon />
            <div >{plant.id}</div>
        </div>
    )
}

export default Plant
