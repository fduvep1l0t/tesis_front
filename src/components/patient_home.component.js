import React, { Component } from 'react';
import axios from 'axios';

export default class Patient_home extends Component {

    constructor(props) {
        super(props);

        this.onChangePatient_name = this.onChangePatient_name.bind(this);
        this.onChangePatient_pw = this.onChangePatient_pw.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            patient_name: '',
            patient_pw: ''
        }
    }

    onChangePatient_name(e) {
        this.setState({
            patient_name: e.target.value
        })
    }
    onChangePatient_pw(e) {
        this.setState({
            patient_pw: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const patient = {
            patient_name: this.state.patient_name,
            patient_pw: this.state.patient_pw
        }
        console.log(patient);

        axios.post('http://localhost:5000/patients/register', patient)
        .then(res => console.log(res.data));

        this.setState({
            patient_name: '',
            patient_pw: ''
        })
        window.location = '/patient_home';
    }

    
    render() {
        return (
        <div>
            <h3>Aqui podrá crear una cuenta para revisar sus exámenes y resultados en cuanto sean procesados y revisados por los especialistas.</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Su nombre de usuario:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.patient_name}
                        onChange={this.onChangePatient_name}
                    />
                </div>
                <div className="form-group">
                    <label>Su contraseña:</label>
                    <input type="password"
                        required
                        className="form-control"
                        value={this.state.patient_pw}
                        onChange={this.onChangePatient_pw}
                        />
                    </div>
                <div className="form-group">
                    <input type="submit" value="Crear cuenta" className="btn btn-primary"/>
                </div>
            </form>
            <a class="btn btn-primary" href="/patient_login" role="button">Ingresar con mi cuenta</a>
        </div>       
        )
    }
}