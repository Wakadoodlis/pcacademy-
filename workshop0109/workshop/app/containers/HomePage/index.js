/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import injectReducer from 'utils/injectReducer';
import selectHomePage from './selector';
import reducer from './reducers';
import { setDATA } from './actions';
import Data from './MOCK_DATA.json';
/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  componentDidMount() {
    // this.props.setDATA(Data);
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <h1>Redux</h1>
      </div>
    );
  }
}
const mapStateToProps = selectHomePage();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(setDATA, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'HomePage', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
