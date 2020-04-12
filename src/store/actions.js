export const SET_STATION_SELECTION = 'SET_STATION_SELECTION';

export function setStationSelection(station) {
    return { type: SET_STATION_SELECTION, payload: station, recievedAt: Date.now() }
}