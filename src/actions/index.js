import { fetch, Request } from 'cross-fetch'
import MainClass from '../main'
let default_params = new MainClass()

export const fetchParcels = () => async (dispatch) => {
    let server_name = await default_params.serverName 
    let request = new Request(server_name + 'users/11/parcels', default_params.request_headers('GET'))
    await fetch(request)
        .then((result) => {
            if (result.status !== 200 && result.status !== 403) {
                alert("refresh page");
            } else {
                return result.json()
            }
        })
        .then((result) => dispatch({ type: "FETCH_PARCEL", payload: result.Parcels }))
};

export const addOrder = (parcel_data) => (dispatch) => {

    let request = new Request(default_params.serverName + 'parcels', default_params.request_headers('POST', parcel_data))

    fetch(request)
        .then(result => {
            if (result.status !== 201 && result.status !== 403) {
                alert("Token expired! login afresh");
            } else {
                return result.json()
            }
        })
        .then(result => {
            console.log(result)
            alert(result.Message);
            dispatch({ type: "ADD_PARCEL", payload: result.data })
        })
}