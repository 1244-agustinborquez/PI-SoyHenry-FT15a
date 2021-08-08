import axios from 'axios';
import {COUNTRIES_URL,ACTIVITY_URL} from '../constants/constants';
import {ALL_COUTRIES,COUNTRIES_DETAILS,NAME_COUTRIES,FILTER_REGION,FILTER_ACTIVITY,FILTER_POPULATION,ORDER_NAME,POST_ACTIVITY,GET_ACTIVITY} from './constants';

export function getCountry() {
    return function(dispatch) {    // el dispach viene desde/gracias al Redux Thunk
        return axios.get(COUNTRIES_URL) // aca usamos axios ya que lo aprendimos a usar en el front para conectarnos con la db
        .then(response => {            // aca generamos la promesa y lo metemos en el dispatch
            dispatch({
                type: ALL_COUTRIES,
                payload: response.data
            });
        });
    }
}

export function getCountriesDetails(id) {
    return function(dispatch) {
        return axios.get(`${COUNTRIES_URL}/${id}`)
        .then(response => {
            dispatch({
                type: COUNTRIES_DETAILS,
                payload: response.data
            });
        });
    }
}

export function getCountriesByName(name) {
    return function(dispatch) {
        return axios.get(`${COUNTRIES_URL}?name=${name}`)
        .then(response => {
            dispatch({
                type: NAME_COUTRIES,
                payload: response.data
            });
        });
    }
}