import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Depresión from '../pages/Depresión';
import Amorpropio from '../pages/Amorpropio';
import Registremonos from '../pages/Resgistremonos';
import Acosoporinternet  from '../pages/Acosoporinternet';
import Trastornosdealimentación  from '../pages/Trastornosdealimentación';
import Menú from '../pages/Menú';
import Olvidarcontraseña from '../pages/Olvidarcontraseña';
import Másinformacion from '../pages/Másinformacion';
import Tiposdeconflicto from '../pages/Tiposdeconflicto';
import Clasificacion from '../pages/Clasificacion';
import QuienesSomos from '../pages/QuienesSomos';
import Acercade from '../pages/Acercade';
import SalirdelaApp from '../pages/SalirdelaApp';
import Respuesta from '../pages/Respuesta';
import Santiago from '../pages/Santiago';
import Dayanna from '../pages/Dayanna';
import Natacha from '../pages/Natacha';
import Karen from '../pages/Karen';

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
                <Route path="/olvidaste" component={Olvidarcontraseña} />
                <Route path="/abandono" component={Registremonos} />
                <Route path="/regresar" component={Menú} />
                <Route path="/menu" component={Menú} />
                <Route path="/entremos" component={Menú} />
                <Route path="/recuperar" component={Menú} />
                <Route path="/masinfo" component={Másinformacion} />
                <Route path="/chat" component={Tiposdeconflicto} />
                <Route path="/clasifica" component={Clasificacion} />
                <Route path="/quienes" component={QuienesSomos} />
                <Route path="/acercad" component={Acercade} />
                <Route path="/salirapp" component={SalirdelaApp} />
                <Route path="/conversacion" component={Tiposdeconflicto} />
                <Route path="/acerca" component={Acercade} />
                <Route path="/quienesS" component={QuienesSomos} />
                <Route path="/informa" component={Másinformacion} />
                <Route path="/principal" component={Menú} />
                <Route path="/perfil" component={SalirdelaApp} />
                <Route path="/leve" component={Respuesta} />
                <Route path="/grave" component={Respuesta} />
                <Route path="/critico" component={Respuesta} />
                <Route path="/santiago" component={Santiago} />
                <Route path="/dayanna" component={Dayanna} />
                <Route path="/natacha" component={Natacha} />
                <Route path="/karen" component={Karen} />

            </Switch>
             </BrowserRouter>

    )
}
export default App;
