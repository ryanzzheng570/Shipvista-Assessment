const GET_PLANTS = "GET_PLANTS"

export const getPlants = (plants) => {
    return {
        type: GET_PLANTS,
        plants
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_PLANTS: {
            return action.plants;
        }
        default:
            return state
    }

}

export default reducer
