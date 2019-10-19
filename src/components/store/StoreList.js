
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function StoreList({ store }) { 

    const emptyMessage = (
        <p>There are no store yet in your collection.</p>
      );
            const storeLists = (
                
                <table class="ui celled table">
                <thead>
                    <tr><th>ID</th>
                    <th>NAME</th>
                    <th>ACTION</th>
                        </tr>
                </thead>
                <tbody>
                {  
                    store[0] && store[0].data && store[0].data.map(row => (
                    <tr key={row.name}>
                    <td data-label="ID">{row.ID}</td>
                    <td data-label="NAME">{row.Name}</td>
                    <td><Link to={`/store/${row.ID}`} className="ui basic button green">Edit</Link></td>
                    </tr>
                ))}
                </tbody>
                </table>
            );

            

    return ( 
       
         <div>
        
         {store.data && store.data.length === 0 ? emptyMessage : storeLists}
       </div>
    );  
}

StoreList.propTypes = {
    store: PropTypes.array.isRequired
}
  