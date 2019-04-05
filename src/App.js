import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap'
import Orders from './Orders';
import CreateOrder from './CreateOrder'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav fill variant="pills" className="justify-content-center" activeKey="/" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                        <NavItem><NavLink to={'/'}>Orders</NavLink></NavItem>
                        <NavItem><NavLink to={'/createorder'}> Create Order</NavLink></NavItem>
                        <NavItem><NavLink to={'/'}> Update Order</NavLink></NavItem>
                    </Nav>
                    <Switch>
                        <Route exact path='/' component={Orders}/>
                        <Route path='/createorder' component={CreateOrder} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;