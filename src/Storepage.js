import React from 'react';
import StoreList from './StoreList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

 class Storepage extends React.Component {
    render() {
        return (
            <div>
                <h1> store list</h1>
                <StoreList store={this.props.store}/>
            </div>
        );
    }
}

Storepage.propTypes = {
    store: PropTypes.array.isRequired
}

function mapStateToProps(state){
    return {
        store: state.store
    }
}

export default connect(mapStateToProps)(Storepage);    