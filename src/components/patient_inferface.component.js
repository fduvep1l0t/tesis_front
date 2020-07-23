import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './Button.component';


const Patient_interface = () => {
    const history = useHistory();
    const goTo = url => () => history.push(url);
    return (
        <div>
            <p> Secret Page for logged-in patients</p>
            <div>
                <Button onClick={goTo('/aaaaaaaaaaa')}> Resultados exámen de sangre: </Button>
            </div>
            <div>
                <Button onClick={goTo('/bbbbbbbbbbbbbbb')}> Resultados exámen DXA: </Button>
            </div>
            <div>
                <Button onClick={goTo('/cccccccccccccc')}> Resultados exámen BDAT:  </Button>
            </div>
        </div>
    ) 
        

}

export default Patient_interface;