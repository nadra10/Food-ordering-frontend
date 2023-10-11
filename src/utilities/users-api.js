

import sendRequest from './send-request';

const BASE_URL = "http://localhost:3001/api/users";



export const signUp = async function (userData) {
 
  return sendRequest(BASE_URL, "POST", userData);
};

export async function login(credentials) {

  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export const checkToken = function () {
  return sendRequest(`${BASE_URL}/check-token`);
};



// import sendRequest from './send-request';

// const BASE_URL = 'http://localhost:3001/api/users';

// export function signUp(userData) {
//   return sendRequest(BASE_URL, 'POST', userData);
// }

// export function login(credentials) {
//   return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
// }