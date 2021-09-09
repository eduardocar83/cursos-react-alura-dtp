import {React, Component} from "react";

import FormularioCadastro from "./components/FormularioCadastro";

import "./assets/App.css";
import "./assets/index.css";
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro onSubmit = {this.criarNota.bind(this)}/>
        <ListaDeNotas notas = {this.state.notas}/>
      </section>
    );
  }
}

export default App;
