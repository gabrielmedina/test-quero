import React from "react";

import { formatMoney } from "../../../helpers/FormatNumber";

class ListFilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: ["", "São José dos Campos", "São Paulo"],
      courses: ["", "Administração", "Arquitetura e Urbanismo"],
      price: 10000,
      kindPresential: true,
      kindDistance: true,
      filter: {}
    };
  }

  handleCampusCityChange = (e) => {
    const price = this.state.price;
    let filter = this.state.filter;

    filter = { ...filter, campus: { city: e.target.value } }

    this.setState({ filter });
    this.props.updateFilters(filter, price);
  };

  handleCourseNameChange = (e) => {
    const price = this.state.price;
    let filter = this.state.filter;

    let course = { ...filter.course, name: e.target.value }
    filter = { ...filter, course }

    this.setState({ filter });
    this.props.updateFilters(filter, price);
  };

  handleKindPresentialChange = (e) => {
    this.setState((prevState) => ({ 
      kindPresential: !prevState.kindPresential 
    }));
  };

  handleKindDistanceChange = (e) => {
    this.setState((prevState) => ({ 
      kindDistance: !prevState.kindDistance 
    }));
  };

  handleRangeChange = (e) => {
    const filter = this.state.filter;
    const price = e.target.value;

    this.setState({ price });
    this.props.updateFilters(filter, price);
  };

  render() {
    const { cities, courses, price, kindPresential, kindDistance } = this.state;

    return (
      <form className="bags-filter-form form">
        <div className="form__field">
          <label className="form__label" htmlFor="city">
            Selecione sua cidade
          </label>
          <select
            onChange={this.handleCampusCityChange}
            className="form__select"
            name="campus.city"
            id="city"
          >
            {cities.map((city) => {
              return (
                <option key={city} value={city}>
                  {city}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="course">
            Selecione o curso de sua preferência
          </label>
          <select
            onChange={this.handleCourseNameChange}
            className="form__select"
            name="course.name"
            id="course"
          >
            {courses.map((course) => {
              return (
                <option key={course} value={course}>
                  {course}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form__field">
          <p className="form__label">
            Como você quer estudar?
          </p>
          <div className="form__checkbox">
            <label className="form__checkbox-label">
              <input
                type="checkbox"
                name="course.kind"
                checked={kindPresential}
                onChange={this.handleKindPresentialChange}
                value="Presencial"
                className="form__checkbox-input"
              /> Presencial
            </label>
            <label className="form__checkbox-label">
              <input
                type="checkbox"
                name="course.kind"
                checked={kindDistance}
                onChange={this.handleKindDistanceChange}
                value="A distância"
                className="form__checkbox-input"
              /> A distância
            </label>
          </div>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="price">
            Até quanto pode pagar?
          </label>
          <div className="form__range">
            <span className="form__range-value">{formatMoney(price)}</span>
            <input
              onChange={this.handleRangeChange}
              value={price}
              min="0"
              max="10000"
              id="price"
              name="price_with_discount"
              type="range"
              className="form__range-input"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default ListFilterForm;
