import React from "react";

const Breadcrumb = ({ links }) => {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb__item">
        <a className="breadcrumb__link" href="/">
          Home
        </a>
      </li>
      <li className="breadcrumb__item breadcrumb__item_back">
        <a className="breadcrumb__link" href="/">
          Minha conta
        </a>
      </li>
      <li className="breadcrumb__item">
        <a className="breadcrumb__link breadcrumb__link_current" aria-current="page" href="/">
          Bolsas favoritas
        </a>
      </li>
    </ol>
  );
};

export default Breadcrumb;
