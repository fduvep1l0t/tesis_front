import React, { Component } from 'react';
import axios from 'axios';

export default class Medic_home extends Component {
    constructor(props) {
        super(props);

        this.onChangeMedic_name = this.onChangeMedic_name.bind(this);
        this.onChangeMedic_pw = this.onChangeMedic_pw.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            medic_name: '',
            medic_pw: ''
        }
    }

    
    

    onChangeMedic_name(e) {
        this.setState({
            medic_name: e.target.value
        })
    }
    onChangeMedic_pw(e) {
        this.setState({
            medic_pw: e.target.value
        })
    }

    

    render() {
        return (
        <div>
            <h3>Aqui puede crear su cuenta como especialista. La activación está sujeta a la administración del sistema con el objetivo de evitar el registro de personas que no pertenecen al proyecto.</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Su nombre de usuario:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.medic_name}
                        onChange={this.onChangeMedic_name}
                    />
                </div>
                <div className="form-group">
                    <label>Su contraseña:</label>
                    <input type="password"
                        required
                        className="form-control"
                        value={this.state.medic_pw}
                        onChange={this.onChangeMedic_pw}
                        />
                    </div>
                <div className="form-group">
                    <input type="submit" value="Crear cuenta" className="btn btn-primary"/>
                </div>
            </form>
            <a class="btn btn-primary" href="/medic_login" role="button">Ingresar con mi cuenta</a>
        </div>
        )
    }
}