import React from 'react';
import { Router, BrowserRouter, Switch } from 'react-router-dom';
import Home  from '../pages/Home';
import Login from '../pages/Login';


const Bienvenido = () => {
    return (
        <BrowserRouter>
<Switch>
<Router exact path="/" component ={Home}/>
<Router path="/Siguiente" component ={Login}/>



</Switch> </BrowserRouter>

    )
} 
export default Bienvenido;