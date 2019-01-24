/**
 *
 * PlacePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPlacePage from './selectors';
import reducer from './reducer';
import { getPlace, setPlace } from './actions';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class PlacePage extends React.Component {
  componentDidMount() {
    console.log('this props from PagePage:', this.props);
    this.props.getPlace();
  }

  render() {
    const { place } = this.props;
    console.log('place object:', place);
    return (
      <div>
        <h1>place page</h1>
      </div>
    );
  }
}

PlacePage.propTypes = {
  getPlace: PropTypes.func.isRequired,
  place: PropTypes.object.isRequired,
};

const mapStateToProps = makeSelectPlacePage();

function mapDispatchToProps(dispatch) {
  return {
    getPlace: () => dispatch(getPlace()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'placePage', reducer });
const withSaga = injectSaga({ key: 'placePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PlacePage);
