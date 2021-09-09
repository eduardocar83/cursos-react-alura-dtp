import React, { Component } from "react";
import './style.css';

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria="";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value; 
    console.log(this.titulo);
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value; 
    console.log(this.texto);
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value; 
    console.log(this.categoria);
  }

  _handleSubmitFormulario(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.onSubmit(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form 
        className="form-cadastro "
        onSubmit={this._handleSubmitFormulario.bind(this)}
      >
        <select className="form-cadastro_input" onChange={this._handleMudancaCategoria.bind(this)}>
          <option>Sem Categoria</option>
          {
            this.props.categorias.map((categoria, index) => { 
              return (<option key={index}>{categoria}</option>);
            })
          }

        </select>

        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange = {this._handleMudancaTitulo.bind(this)}
        />

        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange = {this._handleMudancaTexto.bind(this)}
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default  FormularioCadastro;
