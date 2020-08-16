import React from "react";
import { findIndex } from "lodash";

class ListFilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [
        "São Paulo",
        "São José dos Campos"
      ],
      courses: [
        "Direito",
        "Arquitetura e Urbanismo"
      ]
    }
  }

  render() {
    const { filterBags } = this.props;
    const { cities, courses } = this.state;

    return (
      <form className="bags-filter-form form">
        <div className="form__field">
          <label className="form__label" htmlFor="city">
            Selecione sua cidade
          </label>
          <select onChange={filterBags} className="form__select" name="city" id="city">
            {cities.map(city => {
              return (
                <option key={city} value={city}>{city}</option>
              )
            })}
          </select>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="course">
            Selecione o curso de sua preferência
          </label>
          <select onChange={filterBags} className="form__select" name="course" id="course">
            {courses.map(course => {
              return (
                <option key={course} value={course}>{course}</option>
              )
            })}
          </select>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="">Como você quer estudar?</label>
          <div className="form__checkbox">
            <label className="form__checkbox-label">
              <input className="form__checkbox-input" type="checkbox" /> Presencial
            </label>
            <label className="form__checkbox-label">
              <input className="form__checkbox-input" type="checkbox" /> A distância
            </label>
          </div>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="">Até quanto pode pagar?</label>
          <div className="form__range">
            <span className="form__range-value">R$10.000</span>
            <input min="0" max="10000" className="form__range-input" type="range" />
          </div>
        </div>
      </form>
    )
  }
}

export default ListFilterForm;