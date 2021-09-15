import { updatePlantLastestWateringTime } from "./utils/reducerFunctions"

const GET_PLANTS = "GET_PLANTS"
const WATER_PLANT = "WATER_PLANT"

export const getPlants = (plants) => {
    return {
        type: GET_PLANTS,
        plants
    }
}

export const waterMyPlant = (id) => {
    return {
        type: WATER_PLANT,
        payload: {
            id
        }
    }
}

//Reducer for Plants
const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_PLANTS: {
            return action.plants;
        }
        case WATER_PLANT: {
            return updatePlantLastestWateringTime(state, action.payload.id);
        }
        default:
            return state
    }

}

export default reducer
