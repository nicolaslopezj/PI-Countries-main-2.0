const initialState = {
    countries: [],
    allCountries: [],
    detail: [],
    activities: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                allCountries: action.payload
            };

        case 'GET_COUNTRIES_NAME':
            return {
                ...state,
                allCountries: action.payload
            };

        case 'GET_DETAIL':
            return {
                ...state,
                countries: action.payload
            };

        case 'POST_ACTIVITY':
            return {
                ...state,
                activities: action.payload
            };

        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: action.payload
            };

        default:
            return state;
    }
}

export default rootReducer;