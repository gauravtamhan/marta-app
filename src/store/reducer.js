import * as actions from './actions';

const initialState = {
    selectedStation: 'Midtown',
    isPostingIncident: false,
    postingIncidentError: '',
    isFetchingIncidentList: false,
    incidentList: [],
    fetchingIncidentsError: '',
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
                postingIncidentError: action.error,
                isPostingIncident: false,
            };
        case actions.FETCH_INCIDENT_LIST_START:
            return {
                ...state,
                isFetchingIncidentList: true,
            };
        case actions.FETCH_INCIDENT_LIST_SUCCESS:
            return {
                ...state,
                isFetchingIncidentList: false,
                incidentList: action.payload,
            };
        case actions.FETCH_INCIDENT_LIST_FAIL:
            return {
                ...state,
                isFetchingIncidentList: false,
                fetchingIncidentsError: action.error,
                incidentList: [],
            };

        default:
            return state;
    }
}