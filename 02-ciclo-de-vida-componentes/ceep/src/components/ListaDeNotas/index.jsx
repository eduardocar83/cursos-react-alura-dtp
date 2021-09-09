import React, { Component } from "react";
import CardNota from "../CardNota";

import "./style.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas-item" key={index}>
              <CardNota 
                indice = {index}
                titulo={nota.titulo} 
                texto={nota.texto}
                categoria={nota.categoria} 
                onDelete = {this.props.onDelete}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
