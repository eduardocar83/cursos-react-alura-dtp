import React, { Component } from "react";
import "./style.css"
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"

class CardNota extends Component {

  handleDeleteClicado(event) {
    event.preventDefault();
    this.props.onDelete(this.props.indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h2 className="card-nota_titulo">{this.props.titulo}</h2>
          <DeleteSVG onClick = {this.handleDeleteClicado.bind(this)} />
        </header>
        <h3>{this.props.categoria}</h3>
        <hr />
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}
export default CardNota;
