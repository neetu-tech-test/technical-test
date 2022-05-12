import axios from "axios";

export const getTimezoneList = () => {
    return axios.get('http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europ')
}

export const getTimezoneDetails = (zone = 'Europe/London') => {
    return axios.get('http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=' + zone)
}