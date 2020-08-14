import React from "react";

import { formatMoney } from "../../helpers/FormatNumber";

import Breadcrumb from "../../components/Breadcrumb";

class FavoritesBags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bags: [
        {
          "full_price": 1498.0,
          "price_with_discount": 1273.3,
          "discount_percentage": 15.0,
          "start_date": "01/02/2020",
          "enrollment_semester": "2020.1",
          "enabled": false,
          "course": {
            "name": "Biomedicina",
            "kind": "Presencial",
            "level": "Bacharelado",
            "shift": "Manhã"
          },
          "university": {
            "name": "Anhembi Morumbi",
            "score": 4.2,
            "logo_url": "https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png"
          },
          "campus": {
            "name": "Vila Olímpia",
            "city": "São Paulo"
          }
        }
      ]
    }
  }

  render() {
    const { bags } = this.state;

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
              <a className="favorites-bags__btn" href="#">
                <i className="favorites-bags__btn-icon fal fa-plus-circle"></i>
                <h2 className="favorites-bags__btn-title">Adicionar bolsa</h2>
                <p className="favorites-bags__btn-text">
                  Clique para adicionar bolsas de cursos do seu interesse
                </p>
              </a>
            </li>
            {bags.map(bag => {
              return (
                <li className="favorites-bags__card card">
                  <section className="favorites-bags__item">
                    <header className="favorites-bags__header">
                      <img className="favorites-bags__university-logo" src={ bag.university.logo_url }/>
                      <h2 className="favorites-bags__university-name">{ bag.university.name }</h2>
                      <p className="favorites-bags__university-course">{ bag.course.name }</p>
                      <span className="favorites-bags__university-score">{ bag.university.score }</span>
                    </header>
                    
                    <hr className="favorites-bags__divisor"/>
                    
                    <div className="favorites-bags__university-details">
                      <p className="favorites-bags__university-kind">
                        { bag.course.kind } • { bag.course.shift }
                      </p>
                      <p className="favorites-bags__university-start-date">
                        Início das aulas em: { bag.start_date }
                      </p>
                    </div>
                    
                    <hr className="favorites-bags__divisor"/>
                    
                    <div className="favorites-bags__university-price">
                      <p className="favorites-bags__university-price-label">Mensalidade com a Quero Bolsa:</p>
                      <p className="favorites-bags__university-full-price">
                        { formatMoney(bag.full_price) }</p>
                      <p className="favorites-bags__university-price-with-discount">
                        <span>{ formatMoney(bag.price_with_discount) }</span>
                        <span className="favorites-bags__university-price_time">/mês</span>
                      </p>
                    </div>

                    <footer className="favorites-bags__footer">
                      <button className="btn btn_secondary">Excluir</button>
                      <button className="btn btn_primary">Ver oferta</button>
                    </footer>
                  </section>
                </li>
              )
            })}
          </ol>
        </section>
      </div>
    )
  }
}

export default FavoritesBags;
