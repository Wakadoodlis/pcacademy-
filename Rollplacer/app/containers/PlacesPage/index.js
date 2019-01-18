import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getPlaces } from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectPlacesPage from './selector';
import style from './style.css';

/* eslint-disable react/prefer-stateless-function */
class PlacesPage extends React.PureComponent {
  componentDidMount() {
    console.log('this props:', this.props);
    this.props.getPlaces();
  }

  render() {
    const { places } = this.props;
    return (
      <div className={style.wraperPlacePage}>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Pavadinimas</th>
                <th>Distancijos ilgis</th>
                <th>Aprasymas</th>
                <th>Zmoniu kiekis</th>
                <th>Sios vietos patalpinimo data</th>
                <th>Miestas</th>
              </tr>
            </thead>

            <tbody>
              {console.log('propsai tbodyhe', this.props)}
              {places.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.distance}</td>
                  <td>{item.condition}</td>
                  <td>{item.description}</td>
                  <td>{item.people}</td>
                  <td>{item.create_date}</td>
                  <td>{item.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

PlacesPage.propTypes = {
  getPlaces: PropTypes.func,
  places: PropTypes.array,
};

const mapStateToProps = makeSelectPlacesPage();

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
