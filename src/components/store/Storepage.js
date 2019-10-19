import React from 'react';
import StoreList from '../store/StoreList';
import { fetchStore } from '../../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


 class Storepage extends React.Component {
     componentDidMount() {
         //this.props.fetchStore();
     }
     
    render() {
        
        return (
            <div>
                <StoreList store={this.props.store}/>
            </div>
        );
    }
}

Storepage.propTypes = {
    store: PropTypes.array.isRequired,
    fetchStore: PropTypes.func.isRequired
}

function mapStateToProps(state){
    console.log('@@@@');
    return {
        store: state.store
    }
}

export default connect(mapStateToProps, { fetchStore })(Storepage);    