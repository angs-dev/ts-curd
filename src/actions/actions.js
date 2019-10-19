export const  SET_STORE = 'SET_STORE';
export const  SERACH_STORE = 'SERACH_STORE';
export const  ADD_CUSTOMER = 'ADD_CUSTOMER';
export const  STORE_UPDATED = 'STORE_UPDATED';
export const SET_STORE_CUSTOMER_COUNT = 'SET_STORE_CUSTOMER_COUNT';
export const SET_STORE_CUSTOMER_DETAIL = 'SET_STORE_CUSTOMER_DETAIL';


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

export function setStoreCustomerCount(store) {
  return {
      type : SET_STORE_CUSTOMER_COUNT,
      store
  }
}



export function setStoreCustomerDetails(store) {
  return {
      type : SET_STORE_CUSTOMER_DETAIL,
      store
  }
}


export function setSearchStore(store) {
  return {
      type : SERACH_STORE,
      store
  }
}

export function storeUpdated(store) {
  return {
    type: STORE_UPDATED,
    store
  }
}

export function addCustomer(store) {
  return {
    type: ADD_CUSTOMER,
    store
  }
}


export function fetchStore() {
    return dispatch => {
           return fetch('/api/stores',{
            headers: {
              "Content-Type": "application/json",
              "Authorization": `bearer ${localStorage.getItem('jwtToken')}`
            }
          })
            .then( res => res.json())
            .then (data => dispatch(setStore(data)));
             
    }
    
}

export function saveCustomer(data) {
    return dispatch => {
      return fetch('/api/createCustomer/1', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${localStorage.getItem('jwtToken')}`
        }
      }).then(handleResponse)
      .then (data => dispatch(addCustomer(data)));
    }
  }

  export function searchStore(data) {
    return dispatch => {
      const api_url =`/api/storeSearch`;
      return fetch(api_url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${localStorage.getItem('jwtToken')}`
        }
      }).then(handleResponse)
      .then (data => dispatch(setSearchStore(data)));
    }
  }

  export function saveStore(data) {
    return dispatch => {
      return fetch(`/api/stores/${data.ID}`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${localStorage.getItem('jwtToken')}`
        }
      }).then(handleResponse)
      .then (data => dispatch(storeUpdated(data)));
    }
  }

  export function fetchStoreCustomerCount() {
    return dispatch => {
           return fetch('/api/store/customerCount',{
            headers: {
              "Content-Type": "application/json",
              "Authorization": `bearer ${localStorage.getItem('jwtToken')}`
            }
          })
            .then( res => res.json())
            .then (data => dispatch(setStoreCustomerCount(data)));
             
    }
  }
    
    export function fetchStoreCustomerDetails() {
      return dispatch => {
             return fetch('/api/store/customerDetails',{
              headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${localStorage.getItem('jwtToken')}`
              }
            })
              .then( res => res.json())
              .then (data => dispatch(setStoreCustomerDetails(data)));
               
      }

    
}