import * as actions from './actions';

const initialState = {
    selectedStation: 'Midtown',
    isPostingIncident: false,
    postingIncidentError: '',
    isFetchingIncidentList: false,
    incidentList: [],
    fetchingIncidentsError: '',
    isFetchingRailSchedule: false,
    isRefreshingRailSchedule: false,
    railSchedule: [],
    fetchingRailScheduleError: '',
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
        case actions.FETCH_RAIL_SCHEDULE_START:
            const { railSchedule } = state;

            return {
                ...state,
                isFetchingRailSchedule: railSchedule.length === 0,
                isRefreshingRailSchedule: railSchedule.length > 0,
            };
        case actions.FETCH_RAIL_SCHEDULE_SUCCESS:
            return {
                ...state,
                isFetchingRailSchedule: false,
                isRefreshingRailSchedule: false,
                railSchedule: action.payload,
            };
        case actions.FETCH_RAIL_SCHEDULE_FAIL:
            return {
                ...state,
                isFetchingRailSchedule: false,
                isRefreshingRailSchedule: false,
                fetchingRailScheduleError: action.error
            };
        default:
            return state;
    }
}