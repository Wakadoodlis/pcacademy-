/**
 *
 * PlacePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPlacePage from './selectors';
import reducer from './reducer';
import { getPlace } from './actions';
import saga from './saga';
import GoogleMap from '../../components/googleMap';
import style from './style.css';

/* eslint-disable react/prefer-stateless-function */
export class PlacePage extends React.Component {
  componentDidMount() {
    console.log('this props from PagePage:', this.props);
    this.props.getPlace(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }

  render() {
    const { place } = this.props;
    const { title, distance, condition, description, city } = place;
    console.log('place object:', place);
    return (
      <div className={style.Wraper}>
        <h3>
          Ttitle:
          {title}
        </h3>
        <h4>
          distance:
          {distance}
        </h4>
        <h4>
          condition:
          {condition}
        </h4>
        <h4>
          description:
          {description}
        </h4>
        <div className={style.googleMapContainer}>
          <p>cia maps</p>
          <GoogleMap />
        </div>
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
    getPlace: id => dispatch(getPlace(id)),
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
