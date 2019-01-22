import React from 'react';
import { Field, reduxForm, reset } from 'redux-form/immutable';
import style from './style.css';

function NewPlace(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={style.newPlaceForm}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="distance">distance</label>
        <Field name="distance" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="condition">condition</label>
        <Field name="condition" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <Field name="description" component="textarea" type="text" />
      </div>
      <div>
        <label htmlFor="people">people</label>
        <Field name="people" component="input" type="text" />
      </div>
      <button type="submit" className="btn">
        sukurti
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'NewPlace',
})(NewPlace);
