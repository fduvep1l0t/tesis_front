import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import PatientLogin from './patient_login.component';

const Landing_patient = ({isLogged, onChange, onSubmit, user, type}) => {
  console.log(isLogged);
  const history = useHistory();
  if(isLogged) history.push(`/${type}_interface`);
  
  return (
    <div>
      <h1>Patient Landing</h1>

      <PatientLogin onChange={onChange} onSubmit={onSubmit} user={user} type={type}/>
    </div>
  )
};

export default Landing_patient;