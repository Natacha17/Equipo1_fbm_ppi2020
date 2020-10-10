import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Depresión from '../pages/Depresión';
import Amorpropio from '../pages/Amorpropio';
import Registremonos from '../pages/Resgistremonos';
import Acosoporinternet  from '../pages/Acosoporinternet';
import Trastornosdealimentación  from '../pages/Trastornosdealimentación';
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/click" component={Amorpropio} />
                <Route path="/siguiente" component={Registremonos} />
                <Route path="/click2" component={Depresión} />
                <Route path="/click3" component={Acosoporinternet} />
                <Route path="/click4" component={Trastornosdealimentación} />
            </Switch>
             </BrowserRouter>

    )
}
export default App;
