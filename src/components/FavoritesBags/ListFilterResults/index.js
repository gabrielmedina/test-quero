import React from "react";
import { findIndex } from "lodash";

import { formatMoney } from "../../../helpers/FormatNumber";

class ListFilterResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFavoritesBags: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.favoritesBags !== this.props.favoritesBags) {
      this.setState({
        selectedFavoritesBags: []
      });
    }
  }

  updateSelectedBags = (bag) => {
    let selectedFavoritesBags = this.state.selectedFavoritesBags;

    const bagTarget = findIndex(selectedFavoritesBags, bag);

    if(bagTarget === -1) {
      selectedFavoritesBags.push(bag);
    } else {
      selectedFavoritesBags.splice(bagTarget, 1);
    }

    this.setState({ selectedFavoritesBags });
  };

  isFavoriteBag = (bag) => {
    const selectedFavoritesBags = this.state.selectedFavoritesBags;
    const bagTarget = findIndex(selectedFavoritesBags, bag);

    return bagTarget !== -1;
  };

  hasSelectedFavoritesBags = () => {
    return this.state.selectedFavoritesBags.length > 0;
  };

  hasFavoritesBags = () => {
    return this.props.bags.length > 0;
  }

  disableAddButton = () => {
    return !(this.hasSelectedFavoritesBags() && this.hasFavoritesBags())
  }

  render() {
    const { selectedFavoritesBags } = this.state;
    const { bags, filteredFavoritesBags, closeDialog } = this.props;

    return (
      <section className="bags-filter-results">
        <header className="bags-filter-results__header">
          <h1 className="bags-filter-results__title">Resultado:</h1>
        </header>

        {this.hasFavoritesBags() ? 
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
                      className="bags-filter-results__checkbox form__checkbox-input"
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
        :
          <div role="alert" className="blankslate">
            <i className="blankslate__icon fas fa-align-slash"></i> 
            <p className="blankslate__text">Nenhuma bolsa encontrada com essas características.</p>
          </div>
        }

        <footer className="bags-filter-results__footer">
          <button onClick={closeDialog} className="btn btn_secondary btn_large">
            Cancelar
          </button>
          <button
            className="btn btn_primary btn_large"
            disabled={this.disableAddButton()}
            onClick={() => {
              filteredFavoritesBags(selectedFavoritesBags);
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
