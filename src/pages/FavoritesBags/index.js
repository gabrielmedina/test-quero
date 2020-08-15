import React from "react";
import axios from "axios";

import { formatMoney } from "../../helpers/FormatNumber";

import Breadcrumb from "../../components/Breadcrumb";
import Dialog from "../../components/Dialog";
import ListFilterForm from "../../components/FavoritesBags/ListFilterForm";
import ListFilterResults from "../../components/FavoritesBags/ListFilterResults";

class FavoritesBags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAddFavoriteBagDialog: false,
      bags: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/bags')
      .then(res => {
        const bags = res.data;
        this.setState({ bags });
      })
  }

  openAddFavoriteBagDialog = () => {
    this.setState({
      displayAddFavoriteBagDialog: true,
    });
  };

  closeAddFavoriteBagDialog = () => {
    this.setState({
      displayAddFavoriteBagDialog: false,
    });
  };

  render() {
    const { bags, displayAddFavoriteBagDialog } = this.state;

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

          <ol className="favorites-bags list">
            <li className="favorites-bags__card card">
              <button
                className="favorites-bags__btn"
                onClick={this.openAddFavoriteBagDialog}
              >
                <i className="favorites-bags__btn-icon fal fa-plus-circle"></i>
                <h2 className="favorites-bags__btn-title">Adicionar bolsa</h2>
                <p className="favorites-bags__btn-text">
                  Clique para adicionar bolsas de cursos do seu interesse
                </p>
              </button>
            </li>
            {bags.map((bag) => {
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
                      <p className="favorites-bags__university-course">
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

                    <footer className="favorites-bags__footer">
                      <button className="btn btn_secondary">Excluir</button>
                      <button className="btn btn_primary">Ver oferta</button>
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
            <ListFilterForm/>
            <ListFilterResults bags={bags}/>
          </Dialog>
        </section>
      </div>
    );
  }
}

export default FavoritesBags;
