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
    console.log('this props:', this.props);
    this.props.getPlaces();
  }

  onSubmit = data => {
    this.props.createPlace(data);
  };

  render() {
    const addPlaceBtn = {
      backgroundColor: '#c62828',
      width: '200px',
      borderRadius: '35px',
    };

    const cardTitle = {
      fontWeight: '500',
    };

    const { places } = this.props;
    return (
      <React.Fragment>
        <div className={style.wraperPlacePage}>
          <div className="container">
            <div className={style.btnPlacesWrap}>
              <Link
                to={NewPlaceForm}
                className="btn-floating btn-large pulse"
                style={addPlaceBtn}
              >
                Pridek nauja vieta
              </Link>
            </div>
            <div className="row">
              {places.map(item => (
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
                      <Link to="#"> Skaityti daugiau..</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h4>Prideti nauja vieta</h4>
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
