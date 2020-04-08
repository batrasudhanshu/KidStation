import React, { Component } from 'react'
import { connect } from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase'


class Crud extends Component {
    render() {
        return (
            <div>
                dsfjska
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {

    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'erasers'}
    ])
)(Crud)