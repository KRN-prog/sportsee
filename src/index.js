import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import './utils/sass/index.scss'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)