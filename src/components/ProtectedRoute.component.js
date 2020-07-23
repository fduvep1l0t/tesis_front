import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Storagecito from '../utils/localstorage.service'



const ProtectedRoute = (props) => {
  const { isLogged, canView=[], component:Component, ...rest} = props;
  const token = Storagecito.get('token1');
  console.log('protected route',token, isLogged);
  const type = Storagecito.get('type');
  console.log('canView=', canView, type);


  return (
    <Route {...rest} render={
      props => {
        if (token && canView.some(can => can===type) ) {
          return <Component {...rest} />
        } else{
          return <Redirect to={
            {
              pathname: '/'
              
            }
          } />
        }
      }
    } />
  )
}


export default ProtectedRoute;