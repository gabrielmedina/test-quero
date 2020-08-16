import React from "react";

class Dialog extends React.Component {
  constructor(props) {
    super(props);

    this.refDialog = React.createRef();
  }

  eventListener = (event) => {
    if (event.keyCode === 27) this.props.closeDialog();
  };

  componentDidMount() {
    this.refDialog.current.focus();
    document.addEventListener("keydown", this.eventListener);
  }

  render() {
    const { title, subtitle, children, opened, closeDialog } = this.props;

    return (
      <section
        role="dialog"
        ref={this.refDialog}
        tabIndex="0"
        className={`dialog ${opened ? "dialog_opened" : "dialog_closed"}`}
      >
        <div className="dialog__container">
          <button
            onClick={closeDialog}
            aria-label="Fechar diálogo"
            className="dialog__close"
          >
            <i className="fal fa-times"></i>
          </button>

          <div className="dialog__content">
            <header className="dialog__header">
              <h2 className="dialog__title">{title}</h2>
              <p className="dialog__subtitle">{subtitle}</p>
            </header>

            {children}
          </div>
        </div>
        <span tabIndex="0" onFocus={() => this.refDialog.current.focus()} />
      </section>
    );
  }
}

export default Dialog;
