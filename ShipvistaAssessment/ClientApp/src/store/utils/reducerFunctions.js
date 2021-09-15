import moment from "moment";

export const updatePlantLastestWateringTime = (state, id) => {
    let stateCopy = [...state];
    let plantIndex = stateCopy.findIndex(plant => plant.id === id);
    stateCopy[plantIndex].lastWateringTime = moment().toISOString();
    return stateCopy;
}