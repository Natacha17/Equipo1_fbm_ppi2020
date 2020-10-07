import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/siguiente" component={Login} />
                <Route path="/siguiente" component={Register} />

            </Switch>
             </BrowserRouter>

    )
}
export default App;
