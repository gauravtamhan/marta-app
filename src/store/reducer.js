import * as actions from './actions';

const initialState = {
    selectedStation: 'Midtown',
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case actions.SET_STATION_SELECTION:
            return {
                ...state,
                selectedStation: action.payload,
            }
        default:
            return state;
    }
}