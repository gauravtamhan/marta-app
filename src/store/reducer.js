import * as actions from './actions';

const initialState = {
    selectedStation: 'Midtown',
    isPostingIncident: false,
    incidentError: '',
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case actions.SET_STATION_SELECTION:
            return {
                ...state,
                selectedStation: action.payload,
            };
        case actions.POST_INCIDENT_START:
            return{
                ...state,
                isPostingIncident: true,
            };
        case actions.POST_INCIDENT_SUCCESS:
            return {
                ...state,
                isPostingIncident: false,
            };
        case actions.POST_INCIDENT_FAIL:
            return {
                ...state,
                incidentError: action.error,
                isPostingIncident: false,
            };
        default:
            return state;
    }
}