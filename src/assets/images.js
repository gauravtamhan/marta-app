const maintenance = require('@assets/images/Maintenance.png')
const criminal = require('@assets/images/Criminal.png')
const bothering = require('@assets/images/Bothering.png')
const suspicious = require('@assets/images/Suspicious.png')
const assist = require('@assets/images/Assist.png')
const medical = require('@assets/images/Medical.png')
const box = require('@assets/images/Package.png')
const transit = require('@assets/images/Transit.png')

const images = {
    'Vandalism/Graffiti': maintenance,
    'Light Issue': maintenance,
    'Sign Outage': maintenance,
    'Train Delayed/Stopped': transit,
    'Nuisance Behavior': bothering,
    'Assualt or fighting': criminal,
    'Gun / knife / shooting': criminal,
    'Human Trafficking': criminal,
    'Medical emergency': medical,
    'Panhandle/Homeless': bothering,
    'Person needs assistance': assist,
    'Sanitary issue': maintenance,
    'Suspicious Activity': suspicious,
    'Unattended bag or package': box,
    'Other issue': maintenance,
};

export default images;