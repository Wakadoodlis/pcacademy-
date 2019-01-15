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
    // axios
    //   .get('http://localhost:1234/places')
    //   .then(res => console.log(res.data));

    // axios
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .then(res => this.setState({ users: res.data }));
    console.log('mounted');
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
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

const withReducer = injectReducer({ key: 'placesPage', reducer });

export default compose(
  withConnect,
  withReducer,
)(PlacesPage);
