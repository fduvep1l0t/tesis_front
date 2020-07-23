import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './Button.component';



const Medic_interface = () => {
    const history = useHistory();
    const goTo = url => () => history.push(url);
    return (
        <div>
            <p> Secret Page for logged-in medics</p>
            <div>
                <Button onClick={goTo('/new_patient_info')}> Ingresar Paciente </Button>
            </div>
            <div>
                <Button onClick={goTo('/new_patient_info')}> Revisar Paciente </Button>
            </div>
        </div>
    ) 
}

export default Medic_interface;