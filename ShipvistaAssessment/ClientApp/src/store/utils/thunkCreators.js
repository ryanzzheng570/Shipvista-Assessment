import {
    getPlants,
    waterMyPlant
} from "../plants";

export const fetchPlants = () => async (dispatch) => {
    const res = await fetch('plants');
    const data = await res.json();
    dispatch(getPlants(data));
}

export const waterThePlant = (id) => (dispatch) => {
    dispatch(waterMyPlant(id));
}