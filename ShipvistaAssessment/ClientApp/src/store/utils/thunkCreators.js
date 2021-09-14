import { getPlants } from "../plants";

export const fetchPlants = () => async (dispatch) => {
    const res = await fetch('plants');
    const data = await res.json();
    dispatch(getPlants(data));
}