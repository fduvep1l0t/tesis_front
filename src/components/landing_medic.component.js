import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import MedicLogin from './medic_login.component';

const Landing_medic = ({isLogged, onChange, onSubmit, user, type}) => {
  console.log(isLogged);
  const history = useHistory();
  if(isLogged) history.push(`/${type}_interface`);
  
  return (
    <div>
      <h1>Medic Landing</h1>

      <MedicLogin onChange={onChange} onSubmit={onSubmit} user={user} type={type}/>
    </div>
  )
};

export default Landing_medic;