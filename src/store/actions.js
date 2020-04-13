import { database } from '@shared/firebase';

export const SET_STATION_SELECTION = 'SET_STATION_SELECTION';

export const POST_INCIDENT_START = 'POST_INCIDENT_START';
export const POST_INCIDENT_SUCCESS = 'POST_INCIDENT_SUCCESS';
export const POST_INCIDENT_FAIL = 'POST_INCIDENT_FAIL';

export const FETCH_INCIDENT_LIST_START = 'FETCH_INCIDENT_LIST_START';
export const FETCH_INCIDENT_LIST_SUCCESS = 'FETCH_INCIDENT_LIST_SUCCESS';
export const FETCH_INCIDENT_LIST_FAIL = 'FETCH_INCIDENT_LIST_FAIL';

export const FETCH_RAIL_SCHEDULE_START = 'FETCH_RAIL_SCHEDULE_START';
export const FETCH_RAIL_SCHEDULE_SUCCESS = 'FETCH_RAIL_SCHEDULE_SUCCESS';
export const FETCH_RAIL_SCHEDULE_FAIL = 'FETCH_RAIL_SCHEDULE_FAIL';


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

export function fetchIncidentListStart() {
    return { type: FETCH_INCIDENT_LIST_START }
}

export function fetchIncidentListSuccess(data) {
    return { type: FETCH_INCIDENT_LIST_SUCCESS, payload: data, receivedAt: Date.now() }
}

export function fetchIncidentListFail(error) {
    return { type: FETCH_INCIDENT_LIST_FAIL, error, receivedAt: Date.now() }
}

export function fetchRailScheduleStart() {
    return { type: FETCH_RAIL_SCHEDULE_START }
}

export function fetchRailScheduleSuccess(data) {
    return { type: FETCH_RAIL_SCHEDULE_SUCCESS, payload: data, receivedAt: Date.now() }
}

export function fetchRailScheduleFail(error) {
    return { type: FETCH_RAIL_SCHEDULE_FAIL, error, receivedAt: Date.now() }
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
};

export const fetchIncidentList = (station) => dispatch => {
    dispatch(fetchIncidentListStart());
    return database.ref().child(`${station}`).orderByChild('timestamp').on('value', (snapshot) => {
        // console.log('Snapshot: ', snapshot) // this auto-fires to fetchIncidentListSuccess because a snapshot exists when the db changes
        if (snapshot.exists()) {
            let incidents = [];
            snapshot.forEach((x) => {
                const item = x.val();
                incidents.push({
                    key: x.key,
                    category: item.category,
                    description: item.description,
                    timestamp: new Date(item.timestamp),
                    upvoteCount: item.upvoteCount,
                    status: item.status,
                });
            });
            dispatch(fetchIncidentListSuccess(incidents.reverse()));
        } else {
            dispatch(fetchIncidentListFail('Could not retrieve list.'))
        }
    });
};

export const updateUpvoteCount = (station, key, value) => dispatch => {
    return database.ref(`${station}/${key}`).update({
        upvoteCount: value,
    })
}

export const fetchRailSchedule = () => dispatch => {
    dispatch(fetchRailScheduleStart())
    const url = 'http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=a474016b-53c0-42a3-be99-8980510826b0';
    return fetch(url)
        .then((response) => {
            return Promise.all([Promise.resolve(response), response.json()]);
        })
        .then(([response, jsonBody]) => {
            if (response.status === 200) {
                dispatch(fetchRailScheduleSuccess(jsonBody))
            } else {
                dispatch(fetchRailScheduleFail(jsonBody.message))
            }
        })
        .catch((err) => {
            console.log('Error: ', err);
        })
}