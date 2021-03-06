import React from 'react';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { getPlaces, createPlace } from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectPlacesPage from './selector';
import rollersImg from './img/rollers.jpg';
import NewPlaceForm from '../../components/newPlaceForm';
import style from './style.css';

/* eslint-disable react/prefer-stateless-function */
class PlacesPage extends React.PureComponent {
  componentDidMount() {
    console.log('this props from placesPage:', this.props);
    this.props.getPlaces();
  }

  onSubmit = data => {
    this.props.createPlace(data);
    // this.props.history.push('/places');
  };

  render() {
    const cardTitle = {
      fontWeight: '500',
    };

    const textCenter = {
      textAlign: 'center',
    };

    const { places } = this.props;
    const placesList = places.length ? (
      places.map(item => (
        <div className="col s8 m4" key={item.id}>
          <div className="card hoverable">
            <div className="card-image">
              <img src={rollersImg} alt="" />
              <span className="card-title" style={cardTitle}>
                {item.title}
              </span>
            </div>
            <div className="card-content">
              <p>{item.description}</p>
            </div>
            <div className="card-action">
              <Link to={`/places/${item.id}`}> Skaityti daugiau..</Link>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="center">
        <h3> Šiuo metu duomenys nepasiekiami... </h3>
      </div>
    );
    return (
      <React.Fragment>
        <div className={style.wraperPlacePage}>
          <div className="container">
            <div className="row">{placesList}</div>
            <h4 style={textCenter}>Prideti nauja vieta</h4>
            <NewPlaceForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

PlacesPage.propTypes = {
  getPlaces: PropTypes.func,
  places: PropTypes.array,
  createPlace: PropTypes.func,
};

const mapStateToProps = makeSelectPlacesPage();

function mapDispatchToProps(dispatch) {
  return {
    getPlaces: () => dispatch(getPlaces()),
    createPlace: data => dispatch(createPlace(data)),
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
