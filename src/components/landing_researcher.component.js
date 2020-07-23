import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Researcherlogin from './researcher_login.component';

const Landing_researcher = ({isLogged, onChange, onSubmit, user, type}) => {
  console.log(isLogged);
  const history = useHistory();
  if(isLogged) history.push(`/${type}_interface`);
  
  return (
    <div>
      <h1>Researcher Landing</h1>

      <Researcherlogin onChange={onChange} onSubmit={onSubmit} user={user} type={type}/>
    </div>
  )
};

export default Landing_researcher;