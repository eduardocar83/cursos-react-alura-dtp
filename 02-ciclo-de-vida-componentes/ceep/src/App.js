import {React, Component} from "react";

import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";

import "./assets/App.css";
import "./assets/index.css";
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ["Esporte", "Ciencia", "Matematica"]
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    console.log("Deletando nota");
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas: arrayNotas});
  }

  addNovaCategoria(categoria) {
    console.log('Nova Categoria');
    const novoArrayCategorias = [...this.state.categorias, categoria]
    const novoEstado = {
      categorias:novoArrayCategorias,
      notas: this.state.notas
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias = {this.state.categorias}
          onSubmit = {this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias 
            onNovaCategoria = {this.addNovaCategoria.bind(this)} 
            categorias = {this.state.categorias}/>
          <ListaDeNotas 
            notas = {this.state.notas}
            onDelete = {this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
