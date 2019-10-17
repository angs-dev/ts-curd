export const SET_STORE = 'fetch store data';

function handleResponse(response) {
    if (response.ok) {
      return response.json();  
    } else { 
      let error = new Error(response.statusText); 
      error.response = response; 
      throw error;
    }
  }

export function setStore(store) {
    return {
        type : SET_STORE,
        store
    }
}
export function fetchStore() {
    return dispatch => {
            fetch('/stores')
            .then( res => res.json())
            .then (data => dispatch(setStore(data)));
             
    }
    
}

export function saveCustomer(data) {
    return dispatch => {
      return fetch('/add/customer', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(handleResponse);
    }
  }