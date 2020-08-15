import React from "react";

const ListFilterForm = () => {
  return (
    <form className="bags-filter-form form">
      <div className="form__field">
        <label className="form__label" htmlFor="city">
          Selecione sua cidade
        </label>
        <select className="form__select" name="city" id="city">
          <option value="1">São José dos Campos</option>
        </select>
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="city">
          Selecione o curso de sua preferência
        </label>
        <select className="form__select" name="city" id="city">
          <option value="1">São José dos Campos</option>
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

export default ListFilterForm;