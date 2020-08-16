import React from "react";
import { findIndex } from "lodash";

import { formatMoney } from "../../../helpers/FormatNumber";

class ListFilterResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFavoritesBags: this.props.bags || [],
    };
  }

  updateSelectedBags = (bag) => {
    let selectedFavoritesBags = this.state.selectedFavoritesBags;

    const index = findIndex(selectedFavoritesBags, bag);
    index === -1
      ? selectedFavoritesBags.push(bag)
      : selectedFavoritesBags.splice(index, 1);

    this.setState({ selectedFavoritesBags });
  };

  isFavoriteBag = (bag) => {
    const selectedFavoritesBags = this.state.selectedFavoritesBags;
    const index = findIndex(selectedFavoritesBags, bag);

    return index !== -1;
  };

  hasSelectedFavoritesBags = () => {
    return this.state.selectedFavoritesBags.length !== 0;
  };

  render() {
    const { selectedFavoritesBags } = this.state;
    const { bags, getFavoritesBags, closeDialog } = this.props;

    return (
      <section className="bags-filter-results">
        <header className="bags-filter-results__header">
          <h1 className="bags-filter-results__title">Resultado:</h1>
        </header>

        <ol className="bags-filter-results__list">
          {bags.map((bag) => {
            return (
              <li key={bag.id} className="bags-filter-results__item">
                <label
                  className="bags-filter-results__label"
                  htmlFor={`bag-filter-result-${bag.id}`}
                >
                  <input
                    id={`bag-filter-result-${bag.id}`}
                    type="checkbox"
                    className="bags-filter-results__checkbox"
                    checked={this.isFavoriteBag(bag)}
                    onChange={() => this.updateSelectedBags(bag)}
                  />

                  <img
                    className="bags-filter-results__university-logo"
                    src={bag.university.logo_url}
                    alt={`Logo ${bag.university.name}`}
                  />

                  <div className="bags-filter-results__content">
                    <div className="bags-filter-results__header">
                      <h2 className="bags-filter-results__university-course">
                        {bag.course.name}
                      </h2>
                      <p className="bags-filter-results__university-course-level">
                        {bag.course.level}
                      </p>
                    </div>

                    <div className="bags-filter-results__university-price">
                      <p className="bags-filter-results__university-discount-percentage">
                        Bolsa de{" "}
                        <span className="bags-filter-results__university-discount-percentage-value">
                          {bag.discount_percentage}%
                        </span>
                      </p>
                      <p className="bags-filter-results__university-price-with-discount">
                        {formatMoney(bag.price_with_discount)}/mês
                      </p>
                    </div>
                  </div>
                </label>
              </li>
            );
          })}
        </ol>

        <footer className="bags-filter-results__footer">
          <button onClick={closeDialog} className="btn btn_secondary btn_large">
            Cancelar
          </button>
          <button
            className="btn btn_primary btn_large"
            disabled={!this.hasSelectedFavoritesBags()}
            onClick={() => {
              getFavoritesBags(selectedFavoritesBags);
              closeDialog();
            }}
          >
            Adicionar bolsa(s)
          </button>
        </footer>
      </section>
    );
  }
}

export default ListFilterResults;
