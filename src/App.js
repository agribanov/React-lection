import React from 'react';
import Todo from './components/Todo';
import About from './components/About';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
} from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <header>
                My APP
                <ul>
                    <li>
                        <Link to="/">Home</Link>{' '}
                    </li>
                    <li>
                        <Link to="/todo">Todos</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/todo">
                    <Todo />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
