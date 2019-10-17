
import PropTypes from 'prop-types';
import React from 'react';

export default function StoreList({ store }) { 
    const empytMessage  = (
        <p> There is no store details there...</p>
    ); 

    const storeLists = (
        <p>store list</p>
    );

    return (
        <div>
            {store.length === 0 ? empytMessage : storeLists}
        </div>
    );  
}

StoreList.propTypes = {
    store: PropTypes.array.isRequired
}
  