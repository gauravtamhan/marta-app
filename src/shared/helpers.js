import moment from 'moment';

const REFERENCE = moment();
const TODAY = REFERENCE.clone().startOf('day');
const YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day');
const A_WEEK_OLD = REFERENCE.clone().subtract(7, 'days').startOf('day');

const isToday = (momentDate) => {
    return momentDate.isSame(TODAY, 'd');
}

const isYesterday = (momentDate) => {
    return momentDate.isSame(YESTERDAY, 'd');
}

const isWithinAWeek = (momentDate) => {
    return momentDate.isAfter(A_WEEK_OLD);
}

export const calculateDateTime = (givenDateTime) => {
    const dateTime = moment(new Date(givenDateTime));

    if (isToday(dateTime)) {
        return dateTime.format("h:mm A");
    } else if (isYesterday(dateTime)) {
        return 'Yesterday';
    } else if (isWithinAWeek(dateTime)) {
        return dateTime.format('dddd');
    } else {
        return dateTime.format("MMMM D, YYYY")
    }
}

export const getHour = () => {
    return moment().hour();
}