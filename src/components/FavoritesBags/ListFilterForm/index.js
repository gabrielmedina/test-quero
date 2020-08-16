import React from "react";

import { Formik, Field, Form } from "formik";
import { formatMoney } from "../../../helpers/FormatNumber";

import INICITAL_CITIES from "../../../constants/Cities";
import INICITAL_COURSES from "../../../constants/Courses";

const INITIAL_VALUUES = {
  campus: {
    city: "São José dos Campos",
  },
  course: {
    name: "",
    kind: ["Presencial", "A distância"],
  },
};

class ListFilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 10000,
    };
  }

  handleSubmit = (values) => {
    const { price } = this.state;

    this.props.updateFilters(values, price);
  };

  handleRangePrice = (price) => {
    this.setState({ price });
  };

  render() {
    const { price } = this.state;

    return (
      <Formik
        initialValues={INITIAL_VALUUES}
        validate={(values) => this.handleSubmit(values)}
      >
        <Form className="bags-filter-form form">
          <div className="form__field">
            <label className="form__label" htmlFor="city">
              Selecione sua cidade
            </label>
            <Field
              id="city"
              name="campus.city"
              as="select"
              className="form__select"
            >
              {INICITAL_CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Field>
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="course">
              Selecione o curso de sua preferência
            </label>
            <Field
              id="course"
              name="course.name"
              as="select"
              className="form__select"
            >
              {INICITAL_COURSES.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </Field>
          </div>

          <div className="form__field">
            <fieldset className="form__fieldset">
              <legend className="form__label">Como você quer estudar?</legend>

              <div className="form__checkbox">
                <label className="form__checkbox-label">
                  <Field
                    type="checkbox"
                    name="course.kind"
                    value="Presencial"
                    className="form__checkbox-input"
                  />
                  Presencial
                </label>

                <label className="form__checkbox-label">
                  <Field
                    type="checkbox"
                    name="course.kind"
                    value="A distância"
                    className="form__checkbox-input"
                  />
                  A distância
                </label>
              </div>
            </fieldset>
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="price">
              Até quanto pode pagar?
            </label>
            <span className="form__range-value">{formatMoney(price)}</span>
            <input
              className="form__range-input"
              id="price"
              name="price_width_discount"
              type="range"
              min="0"
              max="10000"
              value={price}
              onChange={(e) => this.handleRangePrice(e.target.value)}
            />
          </div>
        </Form>
      </Formik>
    );
  }
}

export default ListFilterForm;
