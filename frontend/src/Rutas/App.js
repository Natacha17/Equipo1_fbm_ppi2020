import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Depresión from '../pages/Depresión';
import Amorpropio from '../pages/Amorpropio';
import Registremonos from '../pages/Resgistremonos';
import Acosoporinternet  from '../pages/Acosoporinternet';
import Trastornosdealimentación  from '../pages/Trastornosdealimentación';
import Menú from '../pages/Menú';
import Olvidarcontraseña from '../pages/Olvidarcontraseña';
import Bienvenida from '../pages/Bienvenida';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/click1" component={Amorpropio} />
                <Route path="/siguiente" component={Registremonos} />
                <Route path="/click2" component={Depresión} />
                <Route path="/click3" component={Acosoporinternet} />
                <Route path="/click4" component={Trastornosdealimentación} />
                <Route path="/olvidar" component={Olvidarcontraseña} />
                <Route path="/abandono" component={Registremonos} />
                <Route path="/regresar" component={Menú} />
                <Route path="/menú" component={Menú} />
            </Switch>
             </BrowserRouter>

    )
}
export default App;
