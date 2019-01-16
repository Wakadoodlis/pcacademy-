/**
 *
 * PostPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Form from '../../components/form';
import makeSelectPostPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPosts, requestBody } from './actions';
/* eslint-disable react/prefer-stateless-function */
export class PostPage extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  getID = id => {
    this.props.requestBody(id.target.value);
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.body);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>PostPage</title>
          <meta name="description" content="Description of PostPage" />
        </Helmet>
        <Form
          posts={this.props.posts}
          getID={this.getID}
          body={this.props.body.body}
        />
      </div>
    );
  }
}

const mapStateToProps = makeSelectPostPage();

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPosts()),
    requestBody: id => dispatch(requestBody(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'postPage', reducer });
const withSaga = injectSaga({ key: 'postPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostPage);
