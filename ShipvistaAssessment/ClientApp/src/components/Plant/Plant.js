import React from 'react'
import PlantIcon from '../Icons/PlantsIcon'

const Plant = ({ plant }) => {
    return (
        <div>
            <PlantIcon color={plant.name} />
            <div >{plant.id}</div>
        </div>
    )
}

export default Plant
