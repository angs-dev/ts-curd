import React from 'react';
import { fetchStoreCustomerCount } from '../../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


 class StoreCustomerCount extends React.Component {
     componentDidMount() {
         this.props.fetchStoreCustomerCount();
     }
     
    render() {
        return (
            <div>
                <table class="ui celled table">
                <thead>
                    <tr><th>ID</th>
                    <th>NAME</th>
                    <th>CUSTOMERCOUNT</th>
                        </tr>
                </thead>
                <tbody>
                {  
                    this.props.store[0] && this.props.store[0].data && this.props.store[0].data.map(row => (
                    <tr key={row.name}>
                    <td data-label="ID">{row.ID}</td>  
                    <td data-label="NAME">{row.Name}</td>
                    <td data-label="NAME">{row.customercount}</td>
                    </tr>
                ))}
                </tbody>
                </table>

            </div>
        );
    }
}

StoreCustomerCount.propTypes = {
    store: PropTypes.array.isRequired,
    fetchStoreCustomerCount: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        store: state.store
    }
}

export default connect(mapStateToProps, { fetchStoreCustomerCount })(StoreCustomerCount);    