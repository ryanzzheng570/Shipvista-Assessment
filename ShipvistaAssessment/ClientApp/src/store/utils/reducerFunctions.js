import moment from "moment";

//Update the time after watered the plant
export const updatePlantLastestWateringTime = (state, id) => {
    //Make a state copy
    let stateCopy = [...state];
    //Get index and modify time
    let plantIndex = stateCopy.findIndex(plant => plant.id === id);
    stateCopy[plantIndex].lastWateringTime = moment().toISOString();
    return stateCopy;
}