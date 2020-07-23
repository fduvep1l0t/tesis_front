import React from 'react';



const PatientLogin = ({onChange, onSubmit, user, type}) => (
   
        <div>
            <h3>Ingrese con su cuenta de paciente.</h3>
            <form onSubmit={onSubmit(type)}>
                <div className="form-group">
                    <label>Nombre de usuario:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={user.patient_name}
                        onChange={onChange(type)}
                        name="patient_name"
                    />
                </div>
                <div className="form-group">
                    <label>Su contraseña:</label>
                    <input type="password"
                        required
                        className="form-control"
                        value={user.patient_pw}
                        onChange={onChange(type)}
                        name="patient_pw"
                        />
                    </div>
                <div className="form-group">
                    <input type="submit" value="Ingresar" className="btn btn-primary"/>
                </div>
            </form>
        </div>       

)

export default PatientLogin;