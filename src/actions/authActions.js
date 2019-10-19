export const  SET_AUTH = 'SET_AUTH';

function handleResponse(response) {
    if (response.ok) {
      return response.json();  
    } else { 
      let error = new Error(response.statusText); 
      error.response = response; 
      throw error;
    }
  }

export function setAuthToken(user) {
         const token = user.token;
        localStorage.setItem('jwtToken', token);
    return {
        type : SET_AUTH,
        user
    }
}



export function login(data) {
    return dispatch => {
      return fetch('/api/auth', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(handleResponse)
      .then (data => dispatch(setAuthToken(data)));
      
    }
  }

