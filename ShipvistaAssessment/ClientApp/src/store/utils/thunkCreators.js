import {
    getPlants,
    waterMyPlant
} from "../plants";

//Fetch plants from the API
export const fetchPlants = () => async (dispatch) => {
    const res = await fetch('plants');
    const data = await res.json();
    dispatch(getPlants(data));
}

//Water the plant action
export const waterThePlant = (id) => (dispatch) => {
    //Only changing the redux state for now because backend SQL server is not set up
    // ** POST request to update the SQL Server ** //
    dispatch(waterMyPlant(id));
}