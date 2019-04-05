const initialState = {
    parcels: [],
    parcel: {}
};

let rootReducer = (state = initialState, action) => {
    if (action !== undefined && action.type === "FETCH_PARCEL") {
        return { ...state, parcels: action.payload };
    }
    else if (action !== undefined && action.type === "ADD_PARCEL") {
        return { ...state, parcel: action.payload };
    } else {
        return state
    }
};

export default rootReducer;