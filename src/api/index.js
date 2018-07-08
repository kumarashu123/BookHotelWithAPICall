import axios from 'axios';
const backenUrl = 'http://localhost:3030'

export const login = async (username, password) => {
    const response = await axios.post(backenUrl + '/authuser', {
        user:username,password:password
    })
    return response;
}

export const createUser = async (userData) => {
    const response = await axios.post(backenUrl + '/createuser', userData)
    return response;
}

export const getMemberList = async () => {
    const response = await axios.get(backenUrl + '/memberlist')
    return response;
}

export const getHotelList = async () => {
    const response = await axios.get(backenUrl + '/hotellist')
    return response;
}