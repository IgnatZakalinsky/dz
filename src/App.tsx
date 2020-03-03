import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Monday from "./pages/Monday";
import Tuesday from "./pages/Tuesday";
import NavBar from "./main/NavBar";
import Wednesday from "./pages/Wednesday";
import Thursday from "./pages/Thursday";
import Friday from "./pages/Friday";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <NavBar/>
                <Switch>
                    <Route path={'/'} exact render={() => <Monday/>}/>
                    <Route path={'/monday'} render={() => <Monday/>}/>
                    <Route path={'/tuesday'} render={() => <Tuesday/>}/>
                    <Route path={'/wednesday'} render={() => <Wednesday/>}/>
                    <Route path={'/thursday'} render={() => <Thursday/>}/>
                    <Route path={'/friday'} render={() => <Friday/>}/>
                    <Route render={() => <div>404 error page</div>}/>
                </Switch>
            </HashRouter>
        </div>
    );
};

export default App;
