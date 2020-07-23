import React from 'react';



const MedicLogin = ({onChange, onSubmit, user, type}) => (
   
        <div>
            <h3>Ingrese con su cuenta de usuario.</h3>
            <form onSubmit={onSubmit(type)}>
                <div className="form-group">
                    <label>Nombre de usuario:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={user.medic_name}
                        onChange={onChange(type)}
                        name="medic_name"
                    />
                </div>
                <div className="form-group">
                    <label>Su contraseña:</label>
                    <input type="password"
                        required
                        className="form-control"
                        value={user.medic_pw}
                        onChange={onChange(type)}
                        name="medic_pw"
                        />
                    </div>
                <div className="form-group">
                    <input type="submit" value="Ingresar" className="btn btn-primary"/>
                </div>
            </form>

            <a class="btn btn-primary" href="/medic_register" role="button">Crear una cuenta</a>
        </div>       

)

export default MedicLogin;