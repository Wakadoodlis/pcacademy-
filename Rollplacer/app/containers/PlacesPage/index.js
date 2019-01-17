import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import makeSelect from './selector';
import { getPlaces } from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class PlacesPage extends React.PureComponent {
  state = {
    // users: [],
  };

  componentDidMount() {
    this.props.getPlaces();
  }

  render() {
    return (
      <div>
        <h1> name</h1>
      </div>
    );
  }
}

PlacesPage.propTypes = {
  getPlaces: PropTypes.func,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    getPlaces: () => dispatch(getPlaces()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'PlacesPage', reducer });

const withSaga = injectSaga({ key: 'PlacesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PlacesPage);
