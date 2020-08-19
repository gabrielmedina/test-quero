import React from "react";

import { Formik, Field, Form } from "formik";
import INITIAL_SEMESTERS from "../../../constants/Semesters";

const INITIAL_VALUES = {
  enrollment_semester: ""
};

class SemesterFilter extends React.Component {
  constructor(props) {
    super(props);

    this.refFormBtn = React.createRef();
  }

  handleSubmitFavoritesBagsFilterForm = (values) => {
    this.props.updateSemesterFilter(values);
  }

  render() {
    return (
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values) => this.handleSubmitFavoritesBagsFilterForm(values)}
      >
        <Form onChange={() => this.refFormBtn.current.click()} className="semester-filter-form form">
          <fieldset className="semester-filter-form__fieldset">
            <legend className="semester-filter-form__legend">Escolha o semestre desejado</legend>

            <div className="semester-filter-form__checkbox">
              {INITIAL_SEMESTERS.map((semester) => (
                <div key={semester.id} className="semester-filter-form__checkbox-item">
                  <Field
                    type="radio"
                    name="enrollment_semester"
                    value={semester.value}
                    id={`semester-filter-checkbox-id-${semester.id}`}
                    className="semester-filter-form__checkbox-input"
                  />
                  <label 
                    htmlFor={`semester-filter-checkbox-id-${semester.id}`} 
                    className="semester-filter-form__checkbox-label"
                  >
                    {semester.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <button className="semester-filter-form__btn" ref={this.refFormBtn} type="submit"></button>
        </Form>
      </Formik>
    );
  }
}

export default SemesterFilter;