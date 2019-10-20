import React from 'react';
import { fetchStoreCustomerDetails } from '../../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


 class StoreCustomerDetails extends React.Component {
     componentDidMount() {
         this.props.fetchStoreCustomerDetails();
     }
     
    render() {
        return (
            <div>
                <table class="ui celled table">
                <thead>
                <tr>
                    <th>STORE NAME</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {  
                    this.props.store[0] && this.props.store[0].data && this.props.store[0].data.map(row => (
                    <tr key={row.Name}>
                    <td data-label="ID">{row.Name}</td>
                    
                    {row.storeData && row.storeData.map(item => (
                    <tr>
                        <td data-label="FirstName">{item.FirstName}</td> 
                        <td data-label="Lastname">{item.Lastname}</td> 
                        <td data-label="Email">{item.Email}</td> 
                    </tr> 
                        ))}
                      
                    </tr>
                ))}
                </tbody>
                </table>

            </div>
        );
    }
}

StoreCustomerDetails.propTypes = {
    store: PropTypes.array.isRequired,
    fetchStoreCustomerDetails: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        store: state.store
    }
}

export default connect(mapStateToProps, { fetchStoreCustomerDetails })(StoreCustomerDetails);    