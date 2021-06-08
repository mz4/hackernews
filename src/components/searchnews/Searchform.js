import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Searchform = ({ setValues }) => {
  return (
    <div className="search__container">
      <div className="search-form__box">
        <Formik
          initialValues={{
            subject: '',
          }}
          onSubmit={async (values) => {
            setValues(values)
          }}
        >
          <Form>
            <div className="search-form__container">
              <div>
                <label className="search-form__title">Subject</label>
              </div>
              <div>
                <Field id="subject" name="subject" placeholder="Subject" />
              </div>
              <div className="search-form__submit">
                <button type="submit">Submit</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Searchform;
