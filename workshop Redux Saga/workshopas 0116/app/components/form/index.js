import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

const Form = props => {
  props.change('notes', props.body);
  return (
    <div>
      <form>
        <div>
          <Field name="favoriteColor" component="select" onChange={props.getID}>
            <option />
            {props.posts.map(item => (
              <option key={item.id} value={item.id}>
              {item.title}
              </option>
            ))}
          </Field>
          <br />
          <div>
            <Field name="notes" component="textarea" value={props.body} />
          </div>
          <br />
          <label>
            <Field name="rate" component="input" type="radio" value="low" />
            1-3
          </label>
          <label>
            <Field name="rate" component="input" type="radio" value="mid" />
            3-5
          </label>
          <label>
            <Field name="rate" component="input" type="radio" value="highs" />
            5-10
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'simple',
})(Form);
