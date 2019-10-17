
import PropTypes from 'prop-types';
import React from 'react';

export default function StoreList({ store }) { 
    /* const empytMessage  = (
        <p> There is no store details there...</p>
    ); 

    const storeLists = (
        <p>store list</p>
    );
*/
    return ( 
         <div>
         <form className="ui form">
             <h1>search store based on store id</h1>
            <div className="field">

                <label htmlFor="StoreId">StoreId</label>
                <input name="StoreId" id="StoreId" />
    
             </div>
       
            <div className="field">
            <button className="ui primary button">Save</button>
            </div>
         </form>
       </div>
    );  
}

StoreList.propTypes = {
    store: PropTypes.array.isRequired
}
  