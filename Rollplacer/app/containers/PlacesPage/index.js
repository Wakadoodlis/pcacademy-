import React from 'react';
// import axios from 'axios';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import makeSelect from './selector';
import { setPlaces } from './actions';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
class PlacesPage extends React.PureComponent {
  state = {
    // users: [],
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1> name</h1>
      </div>
    );
  }
}

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    setPlaces: places => dispatch(setPlaces(places)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'PlacesPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(PlacesPage);
