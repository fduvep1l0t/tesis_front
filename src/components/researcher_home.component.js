import React, { Component } from 'react';
import axios from 'axios';

export default class Researcher_home extends Component {
    constructor(props) {
        super(props);

        this.onChangeResearcher_name = this.onChangeResearcher_name.bind(this);
        this.onChangeResearcher_pw = this.onChangeResearcher_pw.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            researcher_name: '',
            researcher_pw: ''
        }
    }

/*  RESERVADO, en caso de posible error.  
    componentDidMount() {
        this.setState({
            researchers: ['test researcher'],
            researcher_name: 'test researcher'
        })
    }
*/
    onChangeResearcher_name(e) {
        this.setState({
            researcher_name: e.target.value
        })
    }
    onChangeResearcher_pw(e) {
        this.setState({
            researcher_pw: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const researcher = {
            researcher_name: this.state.researcher_name,
            researcher_pw: this.state.researcher_pw
        }
        console.log(researcher)

        axios.post('http://localhost:5000/researchers/register', researcher)
        .then(res => console.log(res.data));

        this.setState({
            researcher_name: '',
            researcher_pw: ''
        })
        window.location = '/Home';
    }

    render() {
        return (
        <div>
            <h3>Para los investigadores, pueden crear su cuenta aqui, no obstante debe ser aprobada por la administración.</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Su nombre de usuario:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.researcher_name}
                        onChange={this.onChangeResearcher_name}
                    />
                </div>
                <div className="form-group">
                    <label>Su contraseña:</label>
                    <input type="password"
                        required
                        className="form-control"
                        value={this.state.researcher_pw}
                        onChange={this.onChangeResearcher_pw}
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