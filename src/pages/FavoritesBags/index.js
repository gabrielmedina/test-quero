import React from "react";
import axios from "axios";

import { findIndex, orderBy, filter, union } from "lodash";
import { formatMoney } from "../../helpers/FormatNumber";

import Breadcrumb from "../../components/Breadcrumb";
import Dialog from "../../components/Dialog";
import ListFilterForm from "../../components/FavoritesBags/ListFilterForm";
import ListFilterResults from "../../components/FavoritesBags/ListFilterResults";
import SemesterFilter from "../../components/FavoritesBags/SemesterFilter";

class FavoritesBags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAddFavoriteBagDialog: false,
      storeBags: [],
      filteredBags: [],
      favoritesBags: [],
      favoritesBagsBySemester: [],
      semesterFilter: '',
    };
  }

  componentDidMount() {
    axios.get("https://api.jsonbin.io/b/5f3c75b6b88c04101cf6d5e7").then((response) => {
      let storeBags = response.data;
      storeBags = orderBy(storeBags, ["university.name", "course.name"], ["asc", "asc"]);
      
      this.setState({ storeBags });
    });
  }

  openAddFavoriteBagDialog = () => {
    let { filteredBags, favoritesBags, storeBags } = this.state;

    filteredBags = filter(storeBags, (bag) => {
      return !favoritesBags.includes(bag)
    });

    this.setState({
      filteredBags,
      displayAddFavoriteBagDialog: true,
    });
  };

  closeAddFavoriteBagDialog = () => {
    this.setState({
      displayAddFavoriteBagDialog: false,
    });
  };

  removeFavoriteBag = (bag) => {
    let { favoritesBags, favoritesBagsBySemester, semesterFilter } = this.state;

    const bagTarget = findIndex(favoritesBags, bag);
    favoritesBags.splice(bagTarget, 1);

    favoritesBagsBySemester = this.updateFavoritesBagsBySemester(favoritesBags, semesterFilter);

    this.setState({ favoritesBags, favoritesBagsBySemester });
  };

  updateFavoritesBags = (selectedFavoritesBags) => {
    let { favoritesBags, favoritesBagsBySemester, semesterFilter } = this.state;

    favoritesBags = union(favoritesBags, selectedFavoritesBags);
    favoritesBags = orderBy(favoritesBags, ["university.name", "course.name"], ["asc", "asc"]);

    favoritesBagsBySemester = this.updateFavoritesBagsBySemester(favoritesBags, semesterFilter);

    this.setState({ favoritesBags, favoritesBagsBySemester });
  };

  updateFavoritesBagsBySemester = (favoriteBags, semesterFilter) => {
    if(semesterFilter === "") return favoriteBags;

    favoriteBags = filter(favoriteBags, (bag) => {
      return bag.enrollment_semester === semesterFilter
    });

    return favoriteBags;
  };

  updateFilteredBags = (filters, price) => {
    let { storeBags } = this.state;
    let filteredBags;

    filteredBags = filter(storeBags, (bag) => {
      return bag.price_with_discount <= price
    });
    
    if(filters.course.name) {
      filteredBags = filter(filteredBags, (bag) => {
        return bag.course.name === filters.course.name
      });
    }

    if(filters.course.kind.length < 2) {
      filteredBags = filter(filteredBags, (bag) => {
        return bag.course.kind === filters.course.kind[0]
      });
    }

    if(filters.campus.city) {
      filteredBags = filter(filteredBags, (bag) => {
        return bag.campus.city === filters.campus.city
      });
    }

    this.setState({ filteredBags });
  };

  updateSemesterFilter = (filters) => {
    const { favoritesBags } = this.state;
    const semesterFilter = filters.enrollment_semester

    let favoritesBagsBySemester = this.updateFavoritesBagsBySemester(favoritesBags, semesterFilter);

    this.setState({ semesterFilter, favoritesBagsBySemester });
  };

  render() {
    const {
      filteredBags,
      favoritesBagsBySemester,
      displayAddFavoriteBagDialog,
    } = this.state;

    return (
      <div className="container">
        <Breadcrumb />

        <section className="page">
          <header className="page__header">
            <h1 className="page__title">Bolsas favoritas</h1>
            <p className="page__text">
              Adicione bolsas de cursos e faculdades do seu interesse e receba
              atualizações com as melhores ofertas disponíveis.
            </p>
          </header>

          <SemesterFilter 
            updateSemesterFilter={this.updateSemesterFilter} />

          <ol className="favorites-bags list">
            <li className="favorites-bags__card card">
              <button
                className="favorites-bags__btn"
                onClick={this.openAddFavoriteBagDialog}
              >
                <i className="favorites-bags__btn-icon fas fa-plus-circle"></i>
                <h2 className="favorites-bags__btn-title">Adicionar bolsa</h2>
                <p className="favorites-bags__btn-text">
                  Clique para adicionar bolsas de cursos do seu interesse
                </p>
              </button>
            </li>
            {favoritesBagsBySemester.map((bag) => {
              return (
                <li key={bag.id} className="favorites-bags__card card">
                  <section className="favorites-bags__item">
                    <header className="favorites-bags__header">
                      <img
                        className="favorites-bags__university-logo"
                        src={bag.university.logo_url}
                        alt={`Logo ${bag.university.name}`}
                      />
                      <h2 className="favorites-bags__university-name">
                        {bag.university.name}
                      </h2>
                      <p
                        title={bag.course.name}
                        className="favorites-bags__university-course"
                      >
                        {bag.course.name}
                      </p>
                      <span className="favorites-bags__university-score">
                        {bag.university.score}
                      </span>
                    </header>

                    <hr className="favorites-bags__divisor" />

                    <div className="favorites-bags__university-details">
                      <p className="favorites-bags__university-kind">
                        {bag.course.kind} • {bag.course.shift}
                      </p>
                      <p className="favorites-bags__university-start-date">
                        Início das aulas em: {bag.start_date}
                      </p>
                    </div>

                    <hr className="favorites-bags__divisor" />

                    {bag.enabled ?
                      <div className="favorites-bags__university-price">
                        <p className="favorites-bags__university-price-label">
                          Mensalidade com a Quero Bolsa:
                        </p>
                        <p className="favorites-bags__university-full-price">
                          {formatMoney(bag.full_price)}
                        </p>
                        <p className="favorites-bags__university-price-with-discount">
                          <span>{formatMoney(bag.price_with_discount)}</span>
                          <span className="favorites-bags__university-price_time">
                            /mês
                          </span>
                        </p>
                      </div>
                    :
                      <div className="favorites-bags__university-disabled">
                        <p className="favorites-bags__university-disabled-label">
                          Bolsa indisponível
                        </p>
                        <p className="favorites-bags__university-disabled-text">
                          Entre em contato com nosso atendimento para saber mais.
                        </p>
                      </div>
                    }

                    <footer className="favorites-bags__footer">
                      <button
                        className="btn btn_small btn_secondary"
                        onClick={() => this.removeFavoriteBag(bag)}
                      >
                        Excluir
                      </button>
                      {bag.enabled ? 
                        <button className="btn btn_small btn_primary">Ver oferta</button>:
                        <button disabled className="btn btn_small btn_primary">Indisponível</button>
                      }
                    </footer>
                  </section>
                </li>
              );
            })}
          </ol>

          <Dialog
            title="Adicionar bolsa"
            subtitle="Filtre e adicione as bolsas de seu interesse."
            opened={displayAddFavoriteBagDialog}
            closeDialog={this.closeAddFavoriteBagDialog}
          >
            <ListFilterForm 
              updateFilters={this.updateFilteredBags} />

            <ListFilterResults
              bags={filteredBags}
              filteredFavoritesBags={this.updateFavoritesBags}
              closeDialog={this.closeAddFavoriteBagDialog}
            />
          </Dialog>
        </section>
      </div>
    );
  }
}

export default FavoritesBags;
