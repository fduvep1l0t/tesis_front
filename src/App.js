import React, { useState }  from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, useHistory, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

//restricción de accesos.

import axios from 'axios';




//componentes.
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";

import Researcher_home from "./components/researcher_home.component";
import ResearcherLogin from "./components/researcher_login.component";
import Researcher_interface from "./components/researcher_interface.component";
import Patient_home from "./components/patient_home.component";
import PatientLogin from "./components/patient_login.component";
import Patient_interface from "./components/patient_inferface.component";
import Medic_home from "./components/medic_home.component";
import MedicLogin from "./components/medic_login.component";
import Medic_interface from "./components/medic_interface.component";

import Landing_researcher from "./components/landing_researcher.component";
import Landing_patient from "./components/landing_patient.component";
import Landing_medic from "./components/landing_medic.component";
import ProtectedRoute from "./components/ProtectedRoute.component";
import Unauthorized from "./components/unauthorized.component";

import New_patient_info from "./components/new_patient_info.component";

import MedicRegister from "./components/medic_register.component";

import Button from "./components/Button.component";


import Storagecito from "./utils/localstorage.service";




function App() {

  console.log("Storagecito.get('token1')", Storagecito.get('user'));
  var token1 = Storagecito.get('token1');
  let history = useHistory();


  const [medic, setMedic] = useState({
    medic_name: 'medic_789',
    medic_pw: '123456'
  });
  const [patient, setPatient] = useState({
    patient_name: 'patient99',
    patient_pw: '123456'
  })
  const [researcher, setResearcher] = useState({
    researcher_name: 'reserch11',
    researcher_pw: '33_xXwaa'
  })

  /*const [patient, setPatient] = useState(false);*/
  /*const [researcher, setResearcher] = useState(false);*/
  

  const [isLogged, setLogged] = useState(false);

  const onChange = (type) => ({target: {name, value}}) =>  {
    if(type==="medic") return setMedic({...medic, [name]:value});
    if(type==="patient") return setPatient({...patient, [name]:value});
    if(type==="researcher") return setResearcher({...researcher, [name]:value})
  }

  const onSubmit = (type) => async (e) => {
    console.log('type',type)

    e.preventDefault();

    let user;

    if(type==="medic") user=medic;
    else if(type==="patient") user=patient;
    else if(type==="researcher") user=researcher;

    try {
      await axios.post(`http://localhost:5000/${type}s/login`, user)
      .then(res => {
        setLogged(true);
        Storagecito.set('token1', res.data.token);
        //se cambió el res.data.medic._id por res.data.user._id
        Storagecito.set('user', res.data.user._id);
        Storagecito.set('type', res.data.type)
        console.log(res);
      })
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitRegister = (type) => async (e) => {
    console.log('from /onSubmitRegister: type is',type)

    e.preventDefault();

    let user;

    if(type==="medic") user=medic;
    else if(type==="patient") user=patient;
    else if(type==="researcher") user=researcher;

    try {
      await axios.post(`http://localhost:5000/${type}s/register`, user)
      .then(res => {
        //setLogged(true);
        Storagecito.set('token1', res.data.token);
        Storagecito.set('user', res.data[type]._id);
        console.log(res);
      })
    } catch (error) {
      console.log(error);
    }
  }

  

  const onLogOutButtonClick = () => {
    Storagecito.remove('token1');
    setLogged(false);
  };
  

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/medic_home" exact component={Medic_home} />
          <Route path="/researcher_home" exact component={Researcher_home} />
          <Route path="/patient_home" exact component={Patient_home} />
                         
          <Route path="/unauth" exact component={Unauthorized}/>


          <Route path="/medic_register" exact render={props => <MedicRegister onChange={onChange} onSubmit={onSubmitRegister} type="medic"/>} />
          <Route exact path='/landing_medic' render={props => <Landing_medic {...props} onChange={onChange} onSubmit={onSubmit} isLogged={isLogged} type="medic" user={medic}/>} />
          <Route path="/medic_login" exact render={props => <MedicLogin onChange={onChange} onSubmit={onSubmit} type="medic"/>} />
          <ProtectedRoute exact path="/medic_interface" canView={['medic']} medic={medic} isLogged={isLogged} component={Medic_interface} />
          <ProtectedRoute exact path="/new_patient_info" canView={['medic']} medic={medic} isLogged={isLogged} component={New_patient_info} />

          <Route exact path='/landing_patient' render={props => <Landing_patient {...props} onChange={onChange} onSubmit={onSubmit} isLogged={isLogged} type="patient" user={patient}/>} />
          <Route path="/patient_login" exact render={props => <PatientLogin onChange={onChange} onSubmit={onSubmit} type="patient"/>} />
          <ProtectedRoute exact path="/patient_interface" canView={['patient']} isLogged={isLogged} patient={patient} component={Patient_interface} />


          <Route exact path='/landing_researcher' render={props => <Landing_researcher {...props} onChange={onChange} onSubmit={onSubmit} isLogged={isLogged} type="researcher" user={researcher}/>} />
          <Route path="/researcher_login" exact render={props => <ResearcherLogin onChange={onChange} onSubmit={onSubmit} type="researcher"/>} />
          <ProtectedRoute path="/researcher_interface" exact component={Researcher_interface} />

        </Switch>
        <Button onClick={onLogOutButtonClick}>Cerrar Sesión</Button>
      </div>
    </Router>
  );
}

export default App;
