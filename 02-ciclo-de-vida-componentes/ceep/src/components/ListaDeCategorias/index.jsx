import React, { Component } from "react";
import './style.css';

class ListaDeCategorias extends Component {

    handleEventoInput(event) {
        if (event.keyCode === 13) {
            this.props.onNovaCategoria(event.target.value);
        }
    }

    render() {
        return (
            <section className="lista-categorias-wrapper">
                <ul className="lista-categorias">
                    <li>Sem Categoria</li>
                    {
                        this.props.categorias.map((categoria, index) => {
                            return <li key={index}>{categoria}</li>
                        })        
                    }

                </ul>
                <div className="input-container">
                    <input 
                        type="text" 
                        placeholder="Adicionar Categoria" 
                        onKeyUp = {this.handleEventoInput.bind(this)}
                    />
                </div>
            </section>
        );
    }
}

export default ListaDeCategorias;