import { API_URL, MAP_IMAGE_API_URL } from "./const";
import axios from 'axios';

export const getZipcodeInformation = async (zipcode) => {
    try {
        const response = await axios.get(`${API_URL}/${zipcode}`)
        return response.data;
    } catch (e) {
        return false;
    }
}

export function getMapImage(latitude, longitude, zoom) {
    //TODO: implement the function to get the map image with [lat, long]
}