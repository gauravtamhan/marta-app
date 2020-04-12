import { database } from '@shared/firebase';

export const SET_STATION_SELECTION = 'SET_STATION_SELECTION';

export const POST_INCIDENT_START = 'POST_INCIDENT_START';
export const POST_INCIDENT_SUCCESS = 'POST_INCIDENT_SUCCESS';
export const POST_INCIDENT_FAIL = 'POST_INCIDENT_FAIL';


export function setStationSelection(station) {
    return { type: SET_STATION_SELECTION, payload: station, recievedAt: Date.now() }
}

export function postIncidentStart() {
    return { type: POST_INCIDENT_START }
}

export function postIncidentSuccess() {
    return { type: POST_INCIDENT_SUCCESS, receivedAt: Date.now() }
}

export function postIncidentFail(error) {
    return { type: POST_INCIDENT_FAIL, error, receivedAt: Date.now() }
}

export const postIncident = (station, postContent) => dispatch => {

    const { category, description } = postContent;

    const data = {
        category,
        description,
        timestamp: new Date().toJSON(),
        upvoteCount: 0,
        status: 0,
    }

    dispatch(postIncidentStart());

    return database.ref(`${station}`).push(data, (error) => {
        if (error) {
            postIncidentFail(error)
        } else {
            postIncidentSuccess()
        }
    });

}